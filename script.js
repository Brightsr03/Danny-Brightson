// Rose Petals
function createPetals(){
    for(let i=0;i<10;i++){
        const petal=document.createElement("div");
        petal.classList.add("petal");
        petal.style.left=Math.random()*100+"vw";
        petal.style.animationDuration=(Math.random()*5+5)+"s";
        document.body.appendChild(petal);
        setTimeout(()=>petal.remove(),10000);
    }
}
setInterval(createPetals,2000);

// NO button
function moveNo(){
    const btn=document.querySelector(".no-btn");
    btn.style.transform=`translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
}

// Open box
function openBox(){
    document.querySelector(".ring-box").classList.add("open");
}

// Yes redirect
function sayYes(){
    const popup = document.getElementById("popup");
    popup.classList.add("active");

    let t = 5;
    const timer = setInterval(()=>{
        t--;
        document.getElementById("countdown").innerText = t;
        if(t <= 0){
            clearInterval(timer);
            window.location.href = "letters.html";
        }
    },500);
}


/* PROPOSAL PAGE */

// Escape NO button
function moveNo(){
    const btn=document.querySelector(".no-btn");
    btn.style.transform=`translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
}

// Open ring box
function openBox(){
    document.querySelector(".ring-box").classList.add("open");
}

// YES popup + redirect
function sayYes(){
    const popup=document.getElementById("popup");
    popup.classList.add("active");

    let t=5;
    const timer=setInterval(()=>{
        t--;
        document.getElementById("countdown").innerText=t;
        if(t<=0){
            clearInterval(timer);
            window.location.href="letters.html";
        }
    },500);
}

/* LETTER PAGE BACKGROUND */

// Particles
const particleCanvas=document.getElementById("particles");
if(particleCanvas){
    const ctx=particleCanvas.getContext("2d");
    particleCanvas.width=window.innerWidth;
    particleCanvas.height=window.innerHeight;

    const particles=[];
    for(let i=0;i<60;i++){
        particles.push({
            x:Math.random()*particleCanvas.width,
            y:Math.random()*particleCanvas.height,
            r:Math.random()*2+1,
            d:Math.random()*0.5+0.2
        });
    }

    function draw(){
        ctx.clearRect(0,0,particleCanvas.width,particleCanvas.height);
        ctx.fillStyle="rgba(255,255,255,0.6)";
        particles.forEach(p=>{
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fill();
            p.y-=p.d;
            if(p.y<0) p.y=particleCanvas.height;
        });
        requestAnimationFrame(draw);
    }
    draw();
}

// Floating Hearts
const hearts=document.querySelector(".bg-hearts");
if(hearts){
    function createHeart(){
        const heart=document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML="💖";
        heart.style.left=Math.random()*100+"vw";
        heart.style.animationDuration=(Math.random()*6+6)+"s";
        heart.style.fontSize=(Math.random()*15+15)+"px";
        hearts.appendChild(heart);
        setTimeout(()=>heart.remove(),12000);
    }
    setInterval(createHeart,800);
}

/* LETTERS SYSTEM */

function openLetter(type){
    const modal=document.getElementById("letterModal");
    const content=document.getElementById("letterContent");

    if(type==="anniversary"){
        typeWriter(`Our Journey 💖
08/02/2020
The day our forever began.
neeyum enna munadiye love panrenu enaku theriyum,irunthalum un kita vanthu naa ennoda love a solradhuku avlo bayanthen.annaiku un kita action la kaatitu odite cuz annaiku enaku moochu pechu edhuvum varala .eppovum thoorama ninu un alaga 
paathu rasichutu iruntha naa en vazhkaila adutha step eduthu vache,Yaar vanthu ketalum perumaya soluve En vaalkaile naa urupadiya panna oru visiyam un kita vanthu ennoda love ah sonadhu ,sone annaiku en life maarichu annaila irunthu oru 6 years enna make paniruka nee,ipo naa ipdi irukena adhu unnala dha ,naa panra china china visiyathayum enaku puriya vachu adhula iruka thapu sari ah feel pana vachu
enna make paniruka.Enna valakuradhule theridhu you definitely be a great mum to our childrens.Edho nethu un kita propose pana mathiri iruki thirumpi patha gada gada nu 6 varsham mudinchu 7th year la irukom idhu mathiri enna innum oru 100 vayasu vara valatha vendi iruku di papa,adhunala naa solradha ketu olunga saptu healthy ah iru di pattu kutty.Love You Sooo Much Di PONDATI😘`);
    }

    if(type==="memories"){
        content.innerHTML=`
<h2>Our Memories 📸</h2>
<div class="gallery">
<img src="./Image/1st.jpg" onclick="openLightbox(this.src)">
<img src="./Image/2nd.jpg" onclick="openLightbox(this.src)">
<img src="./Image/3rd.jpg" onclick="openLightbox(this.src)">
</div>
<p>Unake theriyum namaloda 6 year journey evlo pics and vdos eduthirupom nu enaku ovvonume rompa memorable aanadhu dha adhu ellathayum podanum na edam pathathu di papa adha nama First Date,Gaming Date and Movie Date pics matum pote innum neraye date poi pic edukanum aduthu adutha memories la add panite porom.</p>`;
    }

    if(type==="future"){
        typeWriter(`Our Future 🌅
Namaloda Marriage noki the naa en valkaila ovvoru step ah eduthu vachitu iruke ennaiku unga appa amma samatham kedaikuth annaiku inthe ulagatule enne vida santhosama evanum iruka matan naa 100% soluve.Mavale Enaku matum kalutha neetu Naa unna kalyanam pani unnoda ovvoru moment ahyum  happines and joyfull ah vachirupe nee neeoda queen di unna nala vachu pathupe future la periya plan la venda unaku enna kalyanam panu naa unna avlo santhosama vachirupe.This is you lovable purushan promise.Love You Sooo Much Di THANGAPILLA😘`);
    }

    modal.style.display="block";
}

function closeLetter(){
    document.getElementById("letterModal").style.display="none";
}

// Typewriter
function typeWriter(text){
    const content=document.getElementById("letterContent");
    content.innerHTML="";
    let i=0;
    const timer=setInterval(()=>{
        content.innerHTML+=text.charAt(i);
        i++;
        if(i>=text.length) clearInterval(timer);
    },40);
}

// Lightbox
function openLightbox(src){
    const lightbox=document.getElementById("lightbox");
    document.getElementById("lightbox-img").src=src;
    lightbox.classList.add("active");
}
function closeLightbox(){
    document.getElementById("lightbox").classList.remove("active");
}

