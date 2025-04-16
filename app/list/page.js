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
                            <h4>{e.title}</h4>
                            <p>{e.content}</p>
                        </div>
                        )
                    })
                }
            </div>
        </div>

        
    )
}