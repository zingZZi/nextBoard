
import Link from "next/link";
import { connectDB } from "/util/database.js"
export default async function List(){

  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
    return(
        <div className="list-bg">
            <div className="list-item">
                {
                    result.map((e,i)=>{
                        return(
                        <div  className="list-item" key={i}>
                                <Link href={`/detail/${e._id}`}>
                                    <h4>{e.title}</h4>
                                </Link>
                            <p>날짜영역</p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}