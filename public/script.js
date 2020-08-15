
if (!localStorage.getItem('userId')) {
  localStorage.setItem('userId', String(Math.random()));
}


const handleClick = event => {
  console.log(event)
}

const body = event => {
  const pageX = Math.round(event.pageX);
  const pageY = Math.round(event.pageY);
  const findFirstDataId = event.path.find(item => item.dataset.trackingid !== undefined);
  const theItemThatGotClicked = event.Target;
  const howLongBeforetheClick = Math.round(event.timestamp);
  const userId = localStorage.getItem('userId');

  const url = '/clicks';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      user: userId,
      
    }),
  });
  
}


window.addEventListener('click', handleClick)
