const testimonial = [
   {
    name: "Frank Anoh",
    photoUrl: "https://media.istockphoto.com/id/1483272796/fr/photo/s%C3%A9minaire-codage-parler.jpg?s=612x612&w=0&k=20&c=dBwOF4eEI6huNgGLuE76y9rhsKJdFfzGwxL2bU7cWcs=",
    text: " I recently had the pleasure of dining at Afro-Restaurant and I must say, it was an incredible experience. From the moment I walked in, I was greeted with warm and friendly smiles from the staff. The  decor was beautifully done. One of the things that stood out to me was the affordability of the menu. Despite the high quality of the food, the prices were very reasonable.Keep up the great work, Afro-Restaurant!"  
},
   {
    name: "Gbenga Akoja",
    photoUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text:"Each dish was bursting with flavor and cooked to perfection. I could tell that the ingredients were fresh and of high quality. I especially loved the traditional African dishes, they were a true representation of the culture and cuisine" },
   {
    name: "Edgar Norris",
    photoUrl: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text:" I highly recommend Afro-Restaurant to anyone looking for a unique and memorable dining experience. Whether you're a fan of African cuisine or just looking to try something new, this restaurant will not disappoint" },
    

];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".Username");

let idx = 0;
updateTestimonial()
function updateTestimonial(){
    const {name,photoUrl,text} = testimonial[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    userNameEl.innerText = name;
    idx++;
    if(idx === testimonial.length){
        idx = 0;
    }

    setTimeout(()=>{
       updateTestimonial()
    }, 10000)
}