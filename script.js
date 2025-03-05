//adding preloader css animation
var count=0;
var counter = setInterval(() => {
    if (count < 101) {
        $('.count').text(count + '%');
        $('.loader').css('width',count + '%');
        count ++
    }else{
        clearInterval(counter)
    }
});
$(document).ready(function(){
    ////start// For automatically switching between dark & light theme on basis of system color scheme////
    const themeStylesheet = document.getElementById('theme');
    const themeToggle = document.getElementById('theme-toggle');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeStylesheet.href = 'dark-theme.css';
        themeToggle.innerText = 'Light';
    } else {
        themeStylesheet.href = 'light-theme.css';
        themeToggle.innerText = 'Dark';
    }
    ///End////
});
//for nightmode/lightmode switching....
document.addEventListener('DOMContentLoaded', () => {
    const themeStylesheet = document.getElementById('theme');
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'dark-theme.css';
            themeToggle.innerText = 'Light';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'light-theme.css';
            themeToggle.innerText = 'Dark';
        }
    })
    //Get the button
    var mybutton = document.getElementById("scrolltotop");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    $('#scrolltotop').on('click', ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
});	
document.addEventListener('DOMContentLoaded', () => {
    //for nav links for mobile....
    const linefornav = document.getElementById("linefornav");
    const navlinks = document.getElementById("nav-links");
    const links = document.getElementById("nav-links li");
    const line1 = document.getElementById("line1");
    linefornav.addEventListener('click', () => {
        navlinks.classList.toggle("open");
        linefornav.classList.toggle("cross");
    });
    $('#nav-links li a').on('click' , ()=>{
    $('#nav-links').toggleClass("open");
    $(".linefornav").toggleClass("cross");
    });
});
//adding animation effect to the page
$(document).ready(function(){
    $('.heading-part1').waypoint(function(direction){
        $('.heading-part1').addClass('animate__fadeInDown')
    },{offset:'100%'})
});
$(document).ready(function(){
    $('.heading-part2').waypoint(function(direction){
        $('.heading-part2').addClass('animate__fadeInUp')
    },{offset:'100%'})
});
$(document).ready(function(){
    $('.knowmore').waypoint(function(direction){
        $('.knowmore').addClass('animate__fadeIn')
    },{offset:'100%'})
});
$(document).ready(function(){
    $('.about-part1').waypoint((direction)=>{
        $('.about-part1').addClass('animate__fadeInRightBig')
    },{offset:'50%'})
});

$(document).ready(function(){
    $('.about-part2').waypoint(function(direction){
        $('.about-part2').addClass('animate__fadeInLeftBig')
    },{offset:'50%'})
});
$(document).ready(function(){
    $('.tl-part1').waypoint(function(direction){
        $('.tl-part1').addClass('animate__fadeInLeft')
    },{offset:'50%'})
});
$(document).ready(function(){
    $('.tl-partp').waypoint(function(direction){
        $('.tl-partp').addClass('animate__fadeInUp')
    },{offset:'50%'})
});
$(document).ready(function(){
    $('.tl-part2').waypoint(function(direction){
        $('.tl-part2').addClass('animate__fadeInRight')
    },{offset:'50%'})
});
$(document).ready(function(){
    $('.skills-part1').waypoint(function(direction){
        $('.skills-part1').addClass('animate__fadeInUp')
    },{offset:'50%'})
});
$(document).ready(function(){
    $('.skills-part2').waypoint(function(direction){
        $('.skills-part2').addClass('animate__fadeInUp')
    },{offset:'50%'})
});
$(document).ready(function(){
    $('.fw-part1').waypoint(function(direction){
        $('.fw-part1').addClass('animate__fadeInUp')
    },{offset:'50%'})
});
$(document).ready(function(){
    $('.fw-part2').waypoint(function(direction){
        $('.fw-part2').addClass('animate__fadeInUp')
    },{offset:'50%'})
});
$(document).ready(function(){
    $('.port-part1').waypoint(function(direction){
        $('.port-part1').addClass('animate__fadeInUp')
    },{offset:'50%'})
});
$(document).ready(function(){
    $('.port-part2').waypoint(function(direction){
        $('.port-part2').addClass('animate__fadeInUp')
    },{offset:'50%'})
});
$(document).ready(function(){
    $('.cont-part1').waypoint(function(direction){
        $('.cont-part1').addClass('animate__fadeInLeftBig')
    },{offset:'60%'})
});
$(document).ready(function(){
    $('.cont-part2').waypoint(function(direction){
        $('.cont-part2').addClass('animate__fadeInRightBig')
    },{offset:'60%'})
});
$(document).ready(function(){
    $('.cv-part1').waypoint(function(direction){
        $('.cv-part1').addClass('animate__fadeInDown')
    },{offset:'50%'})
});
$(document).ready(function(){
    $('.sm-part1').waypoint(function(direction){
        $('.sm-part1').addClass('animate__bounceIn')
    },{offset:'80%'})
});
$(document).ready(function(){
    $('.sm-part2').waypoint(function(direction){
        $('.sm-part2').addClass('animate__fadeInUp')
    },{offset:'90%'})
});