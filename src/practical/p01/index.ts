import axios from 'axios'

class Addre{
	id?:number;
	name?:string;
	phone?:string;
	address?:string;
}

const getPostalAddress = async () => {

await axios.get<Addre>('https://jsonplaceholder.typicode.com/users')
.then((res) => {
	console.log(res.data)
})
}

getPostalAddress();
