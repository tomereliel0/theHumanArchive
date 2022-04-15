import { Contact } from '@prisma/client';
import Image from 'next/image';


export default function GridItem({data}) {
  return ( //Post UI Design Start HERE
    <div key={data.pid} className="border rounded-lg p-4 flex">
      {console.log(data)}
      <div className="my-auto">
        {/* <Image
          src={props.post.content}
          alt="Content"
          width={50}
          height={50}
          className="rounded-full"
        /> */}
      </div>
      <div className="ml-4">
        <p className="text-xl text-gray-700">
          {data.firstName} {data.lastName}
        </p>
        <p className="text-gray-500">{data.date}</p>
      </div>
    </div>
  )
}