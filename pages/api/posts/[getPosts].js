import {PrismaClient} from '@prisma/client';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const prisma = new PrismaClient()

export default async function handler(req, res) {
  
  if(req.method !='POST'){
    return res.status(405).json({message:'Method not allowed'})
}
const postParams = JSON.parse(req.query.getPosts)
const posts = await prisma.post.findMany({
    where: {
      firstName: {
        contains: 'John', //param!
      },
    },
  });
//const getPosts = await prisma.post.create(postData)
//console.log(posts)
res.status(200).json(posts)
//res.status(200).json({ name: 'recived data' })
}
