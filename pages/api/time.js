export default function handler(요청,응답){
    let today = new Date();   
    return 응답.status(200).json(today)
}