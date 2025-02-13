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
                    <Col md={6} className="golf-text text">
                        <p>
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
                        </p>
                    </Col>
                    <Col md={6} className="golf-picture pic">
                        <img src='/content/golf_pic.png' alt="my dad and I at the European Club in Ireland" />
                    </Col>
                </Row>

                <Row className="travel-section sec">
                    <Col md={6} className="travel-picture pic">
                        <img src='/content/travel_pic.png' alt="Florence skyline" />
                    </Col>
                    <Col md={6} className="travel-text text">
                        <p>
                            Traveling is something that I think people universally agree
                            is awesome. Whether it be to see family, friends, or just
                            take a break, everyone loves to travel. I have been fortunate
                            enough to travel to a total of 15 different countries, not including
                            the US. While it would be unfair to pick least favorites, I will give
                            my top 3. Germany takes the top spot for its beer culture and outdoor lifestyle.
                            Living in Berlin for 4 months taught me this best.
                            Number 2 is Italy for me, the combination of the Alps in the north and
                            the Tuscan hills in the middle with the laid back lifestyle make Italy
                            a great travel destination. Third place is harder to decide, but I think it goes to Hungary.
                            I had a great weekend in Budapest
                            with my friends, and the architecture was gorgeous. Honorable mention
                            to Scotland.
                        </p>
                    </Col>
                </Row>

                <Row className="soccer-section sec">
                    <Col md={6} className="soccer-text text">
                        <p>
                            Soccer was my main sport growing up. I have played it for as long as I
                            can remember. I was originally a right back, however I got moved into
                            center back for my high school career. Part of me wishes I played in
                            college, however I wouldn't trade the education and experiences I've had
                            at UW-Madison for anything - so I think I made the right choice. I still
                            have the opportunity to play intramurals, which I find a fun way to stay
                            connected with the game. As for watching soccer, during my time abroad I
                            made it to a Champions League game, Bundesliga game, and Bundesliga.2 game.
                            All were exceptional experiences. My Premier League team is Manchester City
                            who I've been supporting since I was 9. I wish I could find the time to
                            watch more Premier League games, but I usually end up watching Champions
                            League games instead.
                        </p>
                    </Col>
                    <Col md={6} className="soccer-picture pic">
                        <img src='/content/soccer_pic.png' alt="Champions League night in Signal Iduna Park" />
                    </Col>
                </Row>

                <Row className="cooking-section sec">
                    <Col md={6} className="cooking-picture pic">
                        <img src='/content/cooking_pic.png' alt="A nice meal I made recently" />
                    </Col>
                    <Col md={6} className="cooking-text text">
                        <p>
                            I grew up with a lot of homemade cooking. My dad was the griller
                            and my Mom handled just about everything else. Missing home-cooked meals at
                            college, I figured it was about time I learned to cook for myself. I started
                            simple with breakfast food and ground beef, but I've worked my way up to
                            venison stuffed peppers and glazed salmon. I love cooking venison, and my
                            go to meal right now venison or chicken and rice with sides of roasted sweet
                            potatoes and sauteed peppers and onions. If you couldn't notice, I still need
                            some work on plating, but that's not the fun part.
                        </p>
                    </Col>
                </Row>

                <Row className="house-music-section sec">
                    <Col md={6} className="house-music-text text">
                        <p>
                            This is a new passion of mine. When I was living in Berlin, I was introduced to
                            techno music, which was a little intense for me. On my search for techno music that
                            was a little easier to listen to, I found the genre of house music. The upbeat tempo
                            paired with a good beat always gets me pumped up for whatever lies ahead of me. Some
                            of my favorite artists currently are JAYC, Lemtom, and AstroHertz. I love putting on 
                            Spotify-recommended songs and discovering new music while programming or working out.
                        </p>
                    </Col>
                    <Col md={6} className="house-music-picture pic">
                        <img src='/content/house_music_pic.png' alt="Some of my favorite house songs" />
                    </Col>
                </Row>

                <Row className="sports-section sec">
                    <Col md={6} className="sports-picture pic">
                        <img src='/content/sports_pic.png' alt="A sunny day at Camp Randall" />
                    </Col>
                    <Col md={6} className="sports-text text">
                        <p>
                            As someone who grew up around sports, I have always been involved in the sports world.
                            While soccer was my first sports-love, I also enjoyed playing and watching hockey. The
                            Chicago Blackhawks dynasty from 2009 - 2015 will always have a special place in my heart.
                            Once I enrolled at UW-Madison, I always took pride in rooting for the Badgers on the
                            football field and basketball court. Although the football was lackluster at times, it
                            felt as though every year we were either good at football or basketball. My newfound
                            passion for football transferred over to the Chicago Bears, which is now one of my favorite
                            teams to root for. Caleb Williams is the answer.
                        </p>
                    </Col>
                </Row>

                <Row className="skiing-section sec">
                    <Col md={6} className="skiing-text text">
                        <p>
                        Every spring break from elementary school through high school was spent on a family ski trip. 
                        There’s something about being out in the snowy wilderness that has always felt right. 
                        In my opinion, few things compare to a day of powder skiing, followed by quality time with 
                        family and friends, reminiscing about the best runs of the day. This passion is something I 
                        hope to share with everyone I meet.
                        </p>
                    </Col>
                    <Col md={6} className="skiing-picture pic">
                        <img src='/content/skiing_pic.png' alt="Chamonix Basin" />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Interests;