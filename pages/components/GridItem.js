import { Contact } from '@prisma/client';
import Image from 'next/image';


export default function ContactCard(props) {
  return (
    <div className="border rounded-lg p-4 flex">
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
          {props.post.firstName} {props.post.lastName}
        </p>
        <p className="text-gray-500">{props.post.date}</p>
      </div>
    </div>
  );
}