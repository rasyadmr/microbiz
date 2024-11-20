import { team } from "@/lib/datas";
import Image from "next/image";

export default function Team() {
  return (
    <section id="team" className="mx-24">
      <div className="py-12 sm:py-16">
        <div className="my-5 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl my-10">
            Tim kami
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p> */}
        </div>

        <div className="mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8">
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 sm:gap-y-16"
          >
            {team.map((member) => (
              <li key={member.name}>
                <div className="flex flex-col md:flex-row items-center gap-x-6 h-full w-full">
                  <Image
                    className="h-16 w-16 rounded-full"
                    src={member.image}
                    alt=""
                    width={50}
                    height={50}
                  />
                  <div className="text-center md:text-start">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {member.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
