function clickEvent(first,last){
    if(first.value.length){
      document.getElementById(`otp${first.id}`).className = "otp-active";
      document.getElementById(`otp${last}`).className = "otp-fillit";
      document.getElementById(last).focus();
    } 
  }