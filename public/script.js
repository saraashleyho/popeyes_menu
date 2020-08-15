
if (!localStorage.getItem('userId')) {
  localStorage.setItem('userId', String(Math.random()));
}


//const handleClick = event => {
  //console.log(event)
//}

const handleClick = async event => {
  const pageX = Math.round(event.pageX);
  const pageY = Math.round(event.pageY);
  const findFirstDataId = event.path.find(item => item.dataset.trackingid !== undefined);
  const trackingid = findFirstDataId.dataset.trackingid;
  const theItemThatGotClicked = event.target.outerHTML;
  const howLongBeforetheClick = Math.round(event.timeStamp);
  const userId = localStorage.getItem('userId');

  const url = '/clicks';
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      userId: userId,
      pageX: pageX,
      pageY: pageY,
      findFirstDataId: trackingid,
      theItemThatGotClicked: theItemThatGotClicked,
      howLongBeforetheClick: howLongBeforetheClick
      
    }),
  });
  
}


window.addEventListener('click', handleClick)
