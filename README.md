### Frontend Mentor - News Homepage

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap");
/\*

- CSS RESET BY @n53337
  \*/

/_ Remove default margin and padding _/
_,
_::before,
\*::after {
box-sizing: border-box;
margin: 0;
padding: 0;
}

/_ Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed _/
ul,
ol,
li {
list-style: none;
}

/_ remove anchor link default styles _/
a {
text-decoration: none;
}

/_ Set core root defaults _/
html:focus-within {
scroll-behavior: smooth;
}

/_ Set core body defaults _/
body {
min-height: 100vh;
text-rendering: optimizeSpeed;
line-height: 1.5;
font-family: "Inter", sans-serif;
}

/_ Make images easier to work with _/
img,
picture {
max-width: 100%;
display: block;
}

/_ Inherit fonts for inputs and buttons _/
input,
button,
textarea,
select {
font: inherit;
}

/_ Colors _/

:root {
--clr-orange: hsl(35, 77%, 62%);
--clr-red: hsl(5, 85%, 63%);
--clr-white: hsl(36, 100%, 99%);
--clr-blue: hsl(233, 8%, 79%);
--clr-darkblue: hsl(240, 100%, 5%);
--clr-lightblue: hsl(236, 13%, 42%);
}

/_ Global Classes _/

.container {
padding: 2rem;
margin: 0 auto;
}
