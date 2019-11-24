import React, {useState} from 'react';
import TopicTitle from './TopicTitle';
import topics from './data/topics';

const TopicsList = () => {
  const [topicToShow, toggleTopicToShow] = useState(null);
  return topics.map((topic, index) => (
    <TopicTitle
      onClickMoreInfo={() => toggleTopicToShow(index)}
      showMoreInfo={topicToShow === index}
      key={index}
      topic={topic}
    />
  ));
};

export default TopicsList;
