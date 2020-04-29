/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/


let studentList = document.getElementsByClassName("student-item cf");
//this variable contains all off the Student items for the page and their elements. I can search it by index
console.log(studentList);
//this variable is the number of items that I wish to show on each page
const itemsPerPage = 10;


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

//function will take in to two parameters list and page number
function showPage(list, page) {
  let showItem = '';
  //The above variable will contain the items to show on the specified page
  //set two variables for start and end index - calculate based on the input page paramenter and multiplying it by the desired number of items per page.  Ued variable for
  // items per page so that I can change it from the variable level and not the function if I need to in the future.
  let startIndex = (page * itemsPerPage) - itemsPerPage;
  let endIndex = (page * itemsPerPage);
  for (let i = 0; i < list.length; i++) {
    //use loop to go over all items in the list parameter and determine which fall within the startIndex and endIndex parameters
    //set all that fall within desired index to a display.style of inherit so they will show
    if(list[i] >= startIndex && list[i] < endIndex) {
      list[i].style.display = "inherit";
      //set all items that fall outside of the desired parameter to a display style of 'none' so they will not show on the page
    } else {
      list[i].style.display = "none";
    }
  }
};





/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


function appendPageLinks(list) {
  

}



// Remember to delete the comments that came with this file, and replace them with your own code comments.