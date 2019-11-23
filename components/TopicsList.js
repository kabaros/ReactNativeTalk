import React, {useState} from 'react';
import {TopicDescription} from './TopicDescription';
import topics from './data/topics';

const TopicsList = () => {
  const [topicToShow, toggleTopicToShow] = useState(null);
  return topics.map((topic, index) => (
    <TopicDescription
      onClickMoreInfo={() => toggleTopicToShow(index)}
      showMoreInfo={topicToShow === index}
      key={index}
      topic={topic}
    />
  ));
};

export default TopicsList;
