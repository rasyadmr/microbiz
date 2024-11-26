"use client"; // Ensures this runs on the client side

import { useEffect, useState } from "react";
import Loading from "./loading";
import Link from "next/link";

// Define the fetch function to get the latest 10 commits
const fetchCommits = async () => {
  const response = await fetch(
    "https://api.github.com/repos/octocat/Hello-World/commits?per_page=10"
  );
  if (!response.ok) {
    throw new Error("Error fetching commits");
  }
  return response.json();
};

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      // You can also add the `username` here if it is part of the response
      username?: string; // GitHub username (optional, if you have this info)
    };
  };
}

export default function Commits() {
  const [data, setData] = useState<Commit[] | null>(null); // Store commit data
  const [error, setError] = useState<string | null>(null);  // Store error message
  const [isLoading, setIsLoading] = useState(true);        // Track loading state

  useEffect(() => {
    // Fetch commits when the component mounts
    const fetchData = async () => {
      try {
        const commits = await fetchCommits(); // Fetch commits
        setData(commits); // Set the fetched data
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred"); // Handle error
      } finally {
        setIsLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array means this runs once when the component mounts

  // Render loading state
  if (isLoading) {
    return <Loading />;
  }

  // Render error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Render the commit data
  return (
    <div className="mt-5">
      <p className="text-gray-600">Perbaruan</p>
      <ul className="my-2 border rounded-md px-5 py-2">
        {data?.map((commit) => {
          const authorUsername = commit.commit.author.username || commit.commit.author.name;
          const githubUrl = `https://github.com/${authorUsername}`;
          return (
            <li key={commit.sha} className="mb-2">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="ml-2">
                  <strong>{commit.commit.message}</strong> -{" "}
                  <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    @{commit.commit.author.name}
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
