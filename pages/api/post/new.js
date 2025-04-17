import { connectDB } from "@/util/database"
export default async function handler(re,an){
  if(re.method == 'POST'){
    if(re.body.title.trim()==''){
      return an.status(200).json('내용이 없음')
    }
    try{
      const db = (await connectDB).db('forum')
      let result = await db.collection('post').insertOne(re.body);
      return an.status(200).redirect('/list')
    }catch(error){

    }
  }
}