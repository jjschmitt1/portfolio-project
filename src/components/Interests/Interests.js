import React from "react";
import MyNavBar from "../Navigation/MyNavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./interests.css";

function Interests() {
    return (
        <div className="interests-wrapper">
            <MyNavBar />
            <Container>
                <h1 className="top-header">My Interests</h1>
                <Row className="golf-section sec">
                    <Col className="golf-text text">
                        I have played golf the majority of my life. Despite this,
                        it wasn't always something
                        I was passionate about. My Dad made me play it growing up,
                        but now I am glad he did because I can beat my friends! I 
                        am currently a 7.9 handicap, which is the lowest I have ever been.
                        I've been lucky enough to play some top courses across the
                        world with my dad, including courses in Ireland, Scotland, and Northern
                        Ireland. My favorite course that I've played would have to be Royal Dornoch,
                        but rounding out my top 3 would be Royal County Down and 
                        Cruden Bay. 
                    </Col>
                    <Col className="golf-picture pic">

                    </Col>
                </Row>
                <Row className="travel-section sec">
                    <Col className="travel-picture pic">

                    </Col>
                    <Col className="travel-text text">
                        Traveling is something that I think people universally agree
                        is awesome. Whether it be to see family, friends, or just 
                        take a break, everyone loves to travel. I have been fortunate
                        enough to travel to a total of 15 different countries, not including
                        the US. While it would be unfair to pick least favorites, I will give
                        my top 3. Number 1 has to be Germany for the culture of beer drinking
                        and being outside. Living in Berlin for 4 months taught be this best.
                        Number 2 is Italy for me, the combination of the Alps in the north and
                        the tuscan hills in the middle with the laid back lifestyle make Italy
                        a great travel destination. Third place is a little harder to discern,
                        however I think it goes to Hungary. I had a great weekend in Budapest 
                        with my friends, and the architecrure was gorgeous. Honorable mention
                        to Scotland.
                    </Col>
                </Row>
                <Row className="soccer-section sec">
                    <Col className="soccer-text text">
                        Soccer was my main sport growing up. I have played it for as long as I
                        can remember. I was originally a right back, however I got moved into 
                        center back for my high school career. Part of my wishes I played in
                        college, however I wouldn't trade the education and experiences I've had 
                        at UW-Madison for anything - so I think I made the right choice. I still
                        have the opportunity to play intermurals, which I find a fun way to stay
                        connected with the game. As for watching soccer, during my time abroad I 
                        made it to a Champions League game, Bundesliga game, and Bundesliga.2 game.
                        All were exceptional experiences. My premier league team is Manchester City 
                        who I've been supporting since I was 9. I wish I could find the time to 
                        watch more premier league games, but I usually resort to watching Champions
                        League games instead.
                    </Col>
                    <Col className="soccer-picture pic">

                    </Col>
                </Row>
                <Row className="cooking-section sec">
                    <Col className="cooking-picture pic">

                    </Col>
                    <Col className="cooking-text text">
                        I grew up in a house with a lot of homemade cooking. My dad was the griller
                        and my Mom handled just about everything else. Missing home-cooked meals at 
                        college, I figured it was about time I learned to cook for myself. I started
                        simple with breakfast food and ground beef, but I've worked my way up to 
                        venison stuffed peppers and glazed salmon. I love cooking venison, and my
                        go to meal right now venison or chicken and rice with sides of roasted sweet
                        potatoes and sauteed peppers and onions. If you have any good recipes I should
                        check out, feel free to email them to me because I love trying and cooking new food.
                    </Col>
                </Row>
                <Row className="house-music-section sec">
                    <Col className="house-music-text text">
                        This is a new passion of mine. When I was living in Berlin, I was introduced to
                        techno music, which was a little intense for me. On my search for techno music that
                        was a little easier to listen to, I found the genre of house music. The upbeat tempo
                        paired with a good beat always gets me pumped up for whatever lays ahead of me. some
                        of my favorite artists currently are JAYC, Lemtom, and AstroHertz. I love putting on
                        the spotify-recommended songs on and finding new music to listen to when Programming
                        or at the gym.
                    </Col>
                    <Col className="house-music-picture pic">

                    </Col>
                </Row>
                <Row className="sports-section sec">
                    <Col className="sports-picture pic">

                    </Col>
                    <Col className="sports-text text">
                        As someone who grew up around sports, I have always been involved in the sports world.
                        While soccer was my first sports-love, I also enjoyed playing and watching hockey. The
                        Chicago Blackhawks dynasty from 2009 - 2015 will always have a special place in my heart.
                        Once I enrolled at UW-Madison, I always took pride in rooting for the Badgers on the
                        football field and basketball court. Although the football was lackluster at times, it 
                        felt as though every year we were either good at football or basketball. My newfound 
                        passion for football transfered over to the Chicago Bears, which is now one of my favorite
                        teams to root for. Caleb Williams is the answer.
                    </Col>
                </Row>
                <Row className="skiing-section sec">
                    <Col className="skiing-text text">
                        Every spring break from elementary school up until the end of highschool was spent on
                        a family skiing trip. Something about being out in the snowy wilderness always felt right.
                        In my opinion, not much beats a day of powder skiing followed by quality time with family
                        and friends reminiscing on the great skiing that happened that day. This passion is something
                        that I hope I can pass on to all of those I meet.
                    </Col>
                    <Col className="skiing-picture pic">

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Interests;