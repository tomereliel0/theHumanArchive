import {PrismaClient} from '@prisma/client';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const prisma = new PrismaClient()


export default async function handler(req, res) {
  
  if(req.method !='POST'){
    return res.status(405).json({message:'Method not allowed'})
}
const postData = JSON.parse(req.body)
// console.log("Parsed JSON")
// console.log(postData)
// console.log("data id" +postData)
const savePost = await prisma.post.create(postData)
//console.log("You are HER")
//res.json(savePost)
res.status(200).json({ name: 'recived data' })
}
