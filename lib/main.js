
document.addEventListener('DOMContentLoaded', () => {
  console.log('Welcome, to my webpage!!!');

  var sections = getAllSections();

  // Method for changing active item in navbar - scrollspy
  const handleView = item => {
    const linkEl = document.querySelector(`#link-${item}`);

    let offsetHeight = 0.6 * window.innerHeight;
    inView.offset({
      bottom: offsetHeight
    });

    inView(`#${item}`).on("enter", () => linkEl.classList.add('is-active')).on("exit", el => linkEl.classList.remove('is-active'));
  };
  sections.forEach(handleView);


});


$(document).keydown(function(e){
  if(e.which == 37){
    goto(getPreviousPage());
  }
  else if(e.which == 39){
    goto(getNextPage());
  }
  else{
    console.log("Wrong key pressed");
  }
});


// array of ids of all sections in the webpage
// ie. all elems having class website-section
function getAllSections(){
  var sections = [];
  $('.website-section').each(function(){
    sections.push(this.id);
  });
  return sections;
}

// Returns the next page to go to
function getNextPage(){
  var sections = getAllSections();
  var i = 0;
  var next = null;
  while(i < sections.length){
    if(inView.is($("#"+sections[i])[0])){
      next = sections[(i+1)%sections.length];
    }
    i++;
  }
  return next;
}

// Returns the previous page
function getPreviousPage(){
  var sections = getAllSections();
  var i = 0;
  var prev = null;
  while(i < sections.length){
    if(inView.is($("#"+sections[i])[0])){
      prev = sections[(i-1 + sections.length)%sections.length];
    }
    i++;
  }
  return prev;
}

// Takes the viewport to the specified pageId
// eg. pageId : "#home"
function goto(pageId){
  $('html, body').animate({
    scrollTop: $("#"+pageId).offset().top
  }, 250, function(){
    window.location.hash = "#"+pageId;
  });
}
