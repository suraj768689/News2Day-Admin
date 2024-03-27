import React,{useState} from 'react';
import './newsFeeds.css'; // Import your CSS file for styling
import AccountNav from '../Navbar/accountNav';

const NewsFeeds = () => {
  // Sample data
  const newsEntries = [
    {
      title: "GT Vs CSK",
      category: "Sports",
      date: "2024-03-26  02:31 pm",
      status: "CSK won by 4 wickets",
      description: " Chennai Super Kings (CSK) and Gujarat Titans (GT) are set to clash in their second encounter of IPL 2024 on March 26 at the MA Chidambaram Stadium (Chepauk). Both teams enter the match with victories in their opening fixtures. The defending champions, CSK, have ushered in a new era with Ruturaj Gaikwad taking over the captaincy reins. In his debut match as IPL skipper, Gaikwad led his side to a resounding victory against the Royal Challengers Bangalore. With the frenzied Chennai crowd behind them, the CSK unit is expected to come out even stronger against the Gujarat Titans.",
      image: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1708674771%2Fwo0atdknfasmuzzfgml1.jpg"
    },
    {
      title: "Arvind Kejriwal Arrest",
      category: "Politics",
      date: "2024-03-24  04:45 pm",
      status: "Arrested",
      description: " Aam Aadmi Party (AAP) protestors were detained outside Patel Chowk metro station while protesting against the arrest of its convenor and Delhi CM Arvind Kejriwal in an alleged money laundering case. The AAP supporters were detained amid their call to 'gherao' Prime Minister Narendra Modi's house.The BJP is also holding parallel protests in the city demanding Kejriwal's resignation as Delhi CM. In the wake of the protests, police have stepped up security in parts of the city.Meanwhile, tomorrow the Delhi high court will take up Arvind Kejriwal's plea challenging his illegal arrest and subsequent remand by the Enforcement Directorate (ED) in a money laundering case linked to the now-scrapped Delhi excise policy..",
      image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-03/22/full/1711091255-7141.jpg?im=FitAndFill=(826,465)"
    },
    // Add more sample entries as needed
  ];

  const [liked, setLiked] = useState(false);

  const [sharedHovered, setSharedHovered] = useState(false);

  const onEdit = entry => {
    console.log("Edit clicked for entry:", entry);
    // Add your edit logic here
  };

  const onDelete = entry => {
    console.log("Delete clicked for entry:", entry);
    // Add your delete logic here
  };


  const onLike = entry => {
    console.log("Like clicked for entry:", entry);
    setLiked(prevLiked => !prevLiked); // Toggle the liked state
  };
  const onShare = entry => {
    console.log("Share clicked for entry:", entry);
    // Add your share logic here
  };

  const onComment = entry => {
    console.log("comment clicked for entry:", entry);
    // Add your share logic here
  };

  return (
    <div className="news-feed-container">
      <div className="account-nav-container">
        <AccountNav />
      </div>
      {newsEntries.map((entry, index) => (
        <div key={index} className="news-entry">
          <img src={entry.image} alt={entry.title} className="news-image" />
          <div className="news-details">
            <h2>{entry.title}</h2>
            <p>Category: {entry.category}</p>
            <p>Date: {entry.date}</p>
            <p>Status: {entry.status}</p>
            <p style={{textAlign:'left'}}>Description: {entry.description}</p>
            <div className="action-buttons">
              <div className="like-share-buttons">
                <button className="share-button">
                  <i className="fas fa-eye"></i> View
                </button>
                <button onClick={() => onLike(entry)} className={`like-button ${liked ? 'liked' : ''}`}>
                  <i className="fas fa-thumbs-up"></i> Like
                </button>
                <button onClick={() => onComment(entry)} className="share-button">
                  <i className="fas fa-comment"></i> Comment
                </button>
                
                <button onClick={() => onShare(entry)} className="share-button">
                  <i className="fas fa-share"></i> Share
                </button>
              </div>
              <button onClick={() => onEdit(entry)} className='edit' >Edit</button>
              <button onClick={() => onDelete(entry)} className='delete' >Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsFeeds;
