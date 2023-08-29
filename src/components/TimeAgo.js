export const timeAgo=(timestamp)=> {
    const currentTime = new Date();
    const targetTime = new Date(timestamp);
    const timeDifference = currentTime - targetTime;
  
    // Define time intervals in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
  
    if (timeDifference < minute) {
      if(Math.floor(timeDifference / 1000) <10) return "just now"
      else return `${Math.floor(timeDifference / 1000)} seconds ago`;
    } else if (timeDifference < hour) {
      return `${Math.floor(timeDifference / minute)} minutes ago`;
    } else if (timeDifference < day) {
      return `${Math.floor(timeDifference / hour)} hours ago`;
    } else if (timeDifference < week) {
      return `${Math.floor(timeDifference / day)} days ago`;
    } else if (timeDifference < month) {
      return `${Math.floor(timeDifference / week)} weeks ago`;
    } else {
      return `${Math.floor(timeDifference / month)} months ago`;
    }
  }