"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import Link from "next/link";

const fetchCommits = async () => {
  const response = await fetch(
    "https://api.github.com/repos/rasyadmr/microbiz/commits?per_page=10"
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
      username?: string;
    };
  };
}

export default function Commits() {
  const [data, setData] = useState<Commit[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const commits = await fetchCommits();
        setData(commits);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mt-5">
      <p className="text-gray-600">Perbaruan</p>
      <ul className="my-2 border rounded-md px-5 py-2">
        {data?.map((commit) => {
          const authorUsername =
            commit.commit.author.username || commit.commit.author.name;
          const githubUrl = `https://github.com/${authorUsername}`;
          return (
            <li key={commit.sha} className="mb-2">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="ml-2">
                  <strong>{commit.commit.message}</strong> -{" "}
                  <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
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
