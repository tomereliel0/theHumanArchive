import {PrismaClient} from '@prisma/client';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const prisma = new PrismaClient()

export default async function handler(req, res) {  
  if(req.method !='POST'){
    return res.status(405).json({message:'Method not allowed'})
}
const {getPosts} = req.query
const posts = await prisma.post.findMany({
    where: { //SEO Start HERE
      OR: [
      {firstName: {
        contains: getPosts,
      }},
      {lastName:{
        contains:getPosts
      }}]
    },
  });

res.status(200).json(posts)
}
