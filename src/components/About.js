import React from 'react'

export const About = React.forwardRef ((props, ref) => {
    return (
        <div className="about__container" ref={ref} >
            <div className="about__title"> 
                <h2>About Us</h2>
            </div>
            <div className="about__story">
                <p>
                        Our goal is to encourage and motivate the everyday beings by giving them the tools to overcome everyday challenges and meet people who have faced and overcome the same challenges. By helping one another, we can transform not only our peers but the world.

                        Our vision for the Breath Your Soul experience is to be a community-based meditation center where the practices and teachings of mindfulness and Meditation are made available broadly to all who are interested. We are guided by the Buddhist teachings on cultivating kindness, clarity, and liberation.

                        As interest in mindfulness has exploded in recent years, the practice has been applied to many aspects of modern life. It has been shown to bring benefits in such areas as education, parenting, medicine, mental health, business, sports, prisons, and conflict resolution. We share our vision for the important role mindfulness can have in our society and how it can help create a society that benefits and supports all its members

                        When someone feels confident about their bodies, their worthiness, and their intelligence, they can go into the world and express themselves without intimidation. We believe there’s no better time than now.
                        
                        There are no rules for achieving your goals and living the lives that you want to live, you can come and help us. You can master your everyday experiences in the real world.

                        Since 2011, Breathe Your Soul has been helping people, young and old, create the lives they want to live through events, talks, meditations, books, videos and more that support and empower them to follow their dreams.
                        

                        Daily practice forms the foundation of Meditation practice: daily meditation practice, and the practice of mindfulness and compassion as we go about our daily lives. Buddhist tradition also emphasizes the value of intensive meditation retreats. Our mission is to stay firmly rooted in the practices of meditation and retreats. From this foundation in meditation and mindfulness, we actively seek to find ways to support practitioners in integrating and applying the spiritual life in all areas of life.
                </p>
            </div>
            <div className="about__third"></div>
        </div>
    )
});
