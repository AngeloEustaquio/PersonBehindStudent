const questions = document.querySelectorAll(".question");

questions.forEach((question, index) => {
  question.querySelector(".number").textContent = String(index + 1).padStart(
    2,
    "0",
  );
});

function printReflection() {
  window.print();
}
const answers = [
    "Logical, Ambitious, Curious, Analytical, and Simple",
    "People assume I'm agnostic or atheist, but I believe in God. I just didn't grow up in a religious household — my mom was working abroad, my dad had a new family, and even though my lola was devout, I never absorbed those beliefs as a kid. A lot of my early years were spent on the streets, and I made a lot of bad choices I take accountability for. It was only after my lola passed that faith came back to me. I don't express it loudly, but I pray. That's how I stay grounded.",
    "I am proud that I maintained high honors last year. Throughout my life, I never thought that I would be able to achieve something like that. Everything I did was brand new because I had never tried it when I was a  kid.",
    "Impostor Syndrome, there are some days when I find myself questioning my skills across all the fields I pursue. This mindset affects me by making me wonder whether my knowledge is enough to build something tangible and useful. ",
    "One fear I want to overcome is the fear of being held back by my past. I've experienced things that changed how I see people and relationships, but I don't want those experiences to define who I become. I want to learn to let go, accept what happened, and move forward without allowing yesterday's disappointments to control my future.",
    "The last time I challenged myself was when I was in 8th grade. We had a project about making a bridge, and it was part of the final output in math class. I only had 2-4 hours because the bus arrived at 5:30a.m, and it was already 12:25a.m at that time. I had woken up from a nap, as I usually fell asleep upon arriving home because of exhaustion. The first thing I did was organize everything I needed, such as popsicle sticks, a glue gun, and bond paper. Eventually, I was able to submit it on time",
    "My biggest motivation when I feel like giving up is the memory of my Lola. Even though she is no longer here, I carry her love, lessons, and memories with me. I want to achieve my dreams knowing that she would have been proud of the person I am becoming.",
    "Five years from now, I want to become a programmer who is already pursuing his dreams in college. I want to be more knowledgeable, skilled, and mature, especially in the field of technology. However, despite all the changes and experiences I might encounter, I still want to be the same person I am today. Someone who values family, stays humble, keeps learning, and never forgets where he started. I want to grow as a person without losing the values that made me who I am today.",
    "One habit I need to change is sacrificing my sleeping time just to build something tangible, especially when I'm working on programming projects. I sometimes get too focused on making progress that I forget the importance of proper rest. I want to learn how to manage my time better so I can continue improving my skills without compromising my health.",
    "The trajectory that you’re going through right now is difficult, and I know that, but I want you to remember that everything that happens has a purpose.  "
]

answers.forEach((answer, index)=>{
    document.getElementById("a"+index).textContent=answer
})
