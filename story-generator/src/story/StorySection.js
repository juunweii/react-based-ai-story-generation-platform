import React, { useRef, useEffect, useState, useCallback } from 'react';
import './StorySection.css';

function StorySection() {
    // Using useRef to create a reference to the div element
    const storyRef = useRef(null);
    const [story, setStory] = useState(initialStory);

    // Handling scroll event
    const handleScroll = useCallback(async () => {
        const div = storyRef.current;

        // Calculating if the user has scrolled to the bottom of the div
        // tolerance value: 1
        const bottom = Math.abs(div.scrollHeight - (div.scrollTop + div.clientHeight)) < 1; // 添加容差值
        
        if (bottom) {
            // Fetching new story and updating the state
            const newStory = await fetchNewStory();
            setStory((prevStory) => [...prevStory, newStory]);
        }
    }, []);

    // Using useEffect to add an event listener for the scroll event
    useEffect(() => {
        const div = storyRef.current;
        div.addEventListener('scroll', handleScroll);

        return () => {
            // Removing the event listener when the component is unmounted
            div.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div ref={storyRef} className="story-section">
            {story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
}

// Function to provide the initial story
const initialStory = () => {
    return ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galletype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galletype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'];
};

// Function to fetch a new story
const fetchNewStory = async () => {
    return Promise.resolve('New story fetch Successfully! New story fetch Successfully! New story fetch Successfully! New story fetch Successfully! New story fetch Successfully! New story fetch Successfully! New story fetch Successfully! New story fetch Successfully!');
};

export default StorySection;
