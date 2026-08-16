const username = document.getElementById('input');
const btn = document.getElementById('search');
const outerCont = document.getElementById('container');
const profCont = document.getElementById('profile-cont');

btn.addEventListener('click',async()=>{
    const userVal = username.value.trim();
    if(userVal){
        try{
    const url = `https://api.github.com/users/${userVal}`;
    const urlData = await fetch(url);
    const data =await urlData.json();
    console.log(urlData);
    console.log(data);
    
    if(urlData.status!= 404){
     username.value = '';
     profCont.innerHTML='';
    

     const singleCont = document.createElement('div');
     singleCont.classList.add('p');
     const profilePic = document.createElement('img');
     profilePic.setAttribute('src',data.avatar_url);
     const nameVal = document.createElement('h2');
     if(data.name === null ){
        nameVal.textContent = 'Name: Not Available';
       
     }else{
     nameVal.textContent = `Name: ${data.name}`;}
     const loginVal = document.createElement('h3');
     loginVal.textContent = `Login: @ ${data.login}`;
     const Followers = document.createElement('p');
     Followers.textContent = `Followers: ${data.followers}`;
     const Following = document.createElement('p');
     Following.textContent = `Following : ${data.following}`;
     const publicRepo = document.createElement('p');
     publicRepo.textContent = `Public_repos: ${data.public_repos}`;
     const locationVal = document.createElement('p');
     if(data.location === null){
        locationVal.textContent = 'Location: Not Available';
     }else{
     locationVal.textContent = `Location: ${data.location}`;}
     const bioVal = document.createElement('p');
     bioVal.textContent =`Bio : ${data.bio}`;
     const companyVal = document.createElement('p');
     companyVal.textContent = `Company: ${data.company}`;
     const gitPro = document.createElement('a');
     gitPro.textContent = 'View Github Profile';
     gitPro.setAttribute('href',data.html_url);
     gitPro.setAttribute('target','_blank');

    
    


     
     singleCont.appendChild(profilePic);
     singleCont.appendChild(nameVal);
     singleCont.appendChild(loginVal);
     singleCont.appendChild(Followers);
     singleCont.appendChild(Following);
     singleCont.appendChild(publicRepo);
     singleCont.appendChild(locationVal);
     singleCont.appendChild(bioVal);
     singleCont.appendChild(companyVal);
     singleCont.appendChild(gitPro);
     profCont.appendChild(singleCont);} else{
        alert('No such user found');
     }
    
    }catch(error){
       alert(error);
        
    }
    
}else{
    alert('Enter GitHub username');
}


})