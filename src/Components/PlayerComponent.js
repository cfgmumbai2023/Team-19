import Card from "react-bootstrap/Card";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function PlayerComponent() {
  const src =
    "https://rr1---sn-5hnekn7z.googlevideo.com/videoplayback?expire=1688866030&ei=jripZPj9EfWMhcIPoaKDwA4&ip=188.241.82.26&id=o-ACFnsGaOI-si5TYkWNcEiLaHePFnODzMxxWGeSRMKN6G&itag=18&source=youtube&requiressl=yes&spc=Ul2SqyC5M6ZdgBBH-h70TkXdRFwy7O5NAo0788sUMw&vprv=1&svpuc=1&mime=video%2Fmp4&ns=nFaPfRdVD5_8ZVtxE-jEAVAO&cnr=14&ratebypass=yes&dur=789.989&lmt=1665273461532774&fexp=24007246,24350017,24362686,51000022&beids=24350017&c=WEB&txp=5438434&n=Mmsr_6_FcZ5l0A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAIxkvBF_waCPg5HrC6q-ZyDmet8dUmOoojBCple0f-1OAiEApSbG4sNlpMuWZHJhNZJoA1U2_lbKK0JQcCpSkniYPHU%3D&redirect_counter=1&rm=sn-h5qzy7s&req_id=c7a86e1cdec1a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=q9&mip=165.225.106.121&mm=31&mn=sn-5hnekn7z&ms=au&mt=1688852579&mv=u&mvi=1&pl=22&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAP4oN1snCESed6sK_Gwkaesn5yd4YSSgslXAnWgcIXQDAiBn2uyq4nT2Qk30fCnn5viou3Lm6kgnpLCMFFqglL326Q%3D%3D";
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row>
        <Col style={{alignItems:"left"}}>
         <Container/>
         <video controls width="80%">
            <source src={src} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
          <div className="">
        <div
          className="col d-flex justify-content-center "
          style={{ scrollBehavior: "smooth" }}
        >
          <Card className="text-center" style={{ width: "80rem" }}>
            <Card.Header>Transcript</Card.Header>
            <Card.Body>
              <Card.Title>Course Title</Card.Title>
              {/* <Card.Text>
                By far my most requested video on this channel with a total of two comments. In today's video, we're going to be looking at the four three three and why it's been one of the most used formations for the past few decades. The four three three has been used by some of the greatest clubs in football history, from Louis Van Gao's Iax in 1995 to Pep Guardiola's Barcelona in 2009, all the way to Jurgen Klopp's Liverpool in 2019. It's been one of the best offensive formations for decades and in the modern game a lot of big clubs are still using it. Manchester City are currently running away with the title, having lost only one game when playing with a four three three last season champions, Liverpool are not having the best season, but their previous season's performances with these formations were some of the best in recent history. PSG are top of league earn on goal difference and their incredible offensive statistics are an example of how lethal the four three three can be. And finally, Barcelona are currently in second place and are yet to lose a game when lining up in the four three three and are slowly closing the gap on Atletico Madrid. To get the most out of this formation, it does require a lot of specific players and so let's take a look at what each player's roles are within the four three three. Firstly, the goalkeeper needs to be an excellent ball player as this formation will require the team to build up play from the back and as a result will need to be able to pick a pass when under pressure from the opposition striker. Barcelona's Andre Testagan is an excellent example of this, able to support the first phase of Barcelona's attack and pick out players with precise passes. The centrebacks must also be excellent ball players, able to move the ball up field under pressure and pick out a pass into the midfield to break the first line of offensive press. At times. They will also need to have good long ball precision to find the wingers or strikers if the opposition defense is not set up properly. Most importantly however, they need to be excellent defenders with strong physical presence and good aerial control. Given that on opposition counterattacks, they will be required to close down the strikers and give them no space to play in this season. The defensive partnership of Stones and Diaz at Manchester City have been outstanding with the best pass completion stats in the team and by far the most clears Per 90. Next up, the fullbacks need to be athletic and help support attack and defense throughout the match. Contrary to a back three lineup, the fullbacks have a much more important defensive role with a four three three and will need to have a good understanding with his teammate on the other flank adapting to each other's position. For example, if the left back has pushed up to support the attack, then it's common for the right back to shift inside and support the defensive line. Last season the partnership between Trent, Alexander, Arnold and Robertson was one of the best in Europe with 25 assists between them and also helping Liverpool achieve the best defensive record in the league. In the midfield three is where we can start to see the main differences of how teams line up based on the players they have at their disposal. It can vary from a flat three, a triangle with two defensive and one offensive midfielder and a triangle with one defensive and two offensive players. The three midfielders need to have excellent passing precision and the ability to pick out players between the lines. They will need to support the defense during buildup and pick out the forwards on the attack with late runs onto the edge of the box or with precise through balls. The three man midfield is usually assigned three roles the defender, the controller and the creator. The defender is the defensive midfielder who shields the back four. The controller sets the tempo of the game and can be considered as a box to box midfielder. And finally, the creator links up the midfield with the forwards ahead of him usually creating the most chances for the team. This is extremely evident in Manchester City's midfield three from this season an excellent CDM with Rodrigo, a great controller with Gundigan and one of the best creators in the world with Kevin de Bruyne currently with the second most assists in the league. Finally, the three forwards are the key to all offensive success in the four three three. Firstly, the wingers will need to be excellent dribblers and be extremely quick, making them excel in one v one situations. They will need to have a good understanding with the striker but also with the fullback either cutting inside to give the fullback space or staying wide and allowing for the overlap. The striker in the four three three can vary greatly based on the tactics of the manager. In some teams, they rely on a strong target man to latch onto any long balls and play the wingers in behind or to get on the end of any crosses into the box, while in other teams the center forward is a lot more dynamic, often playing as a false nine and freeing up the box for the wingers to move into with a strong target. Man. We can see this with Antoine Griezmann at Barcelona with Messi and Damele looking for the layoff or crossing the ball to Griezmann for a headed goal with a false nine. We can see this in PSG with Keen coming short and freeing up the space for Embappe and Di Maria to move into. So the four three three isn't going to work for everyone and it does require the team to be excellent passers and be able to move the ball through tight spaces. Now let's examine this further by taking a look at the main attacking threats it possesses. Before looking at the main attacking dynamics, there are two key words that you need to keep in mind when talking about the four three three. The first word is triangles. Just by looking at the basic shape of a four three three, you can see the amount of triangles that it creates. There's triangles in the defense, there's triangles in the midfield and there's triangles in attack. By dividing the pitch horizontally, we see that these shapes provide an excellent cover all up the pitch that helps the team move the ball up field, acting as a sort of step ladder from one zone to the next. And when dividing the pitch vertically, we can see that this formation will always feature players in key positions such as the half spaces. With at least two players in each of the five zones, triangles are a fantastic way of bypassing opposition players. As a player who is receiving the ball will always have at least two options available to him. The second word to keep in mind is interchangeability. While I'm not sure if this is a word, I'm certain of the importance that this plays within the formation. For the four three three to truly be used effectively, it requires the team to constantly move and cover other teammates runs. For example, if the fullback pushes up, then the CDM will shift out wide to cover any defensive hole. If the winger moves inside, then their central attacking midfielder can move out to the wing to stretch the opposition. The constant movement and position changes are what truly make this formation effective. Now let's move on to the main attacking dynamic. As with all modern tactics, the four three three is at its best when building up play from the back line. Compared to other popular formations in the modern game, the four three three is more narrow and direct formation and will attempt to create passing lanes through the midfield to reach the striker. When starting play, if the opposition is pressing the two centrebacks, then the CDM can drop between them and help shift the ball. Given that if the opposition midfielder now presses with a front three, they will be outnumbered in midfield or if the CDM stays slightly higher up the pitch, one of the fullbacks can drop alongside the centrebacks to create a three V two situation and overcome the first offensive line. The most important task for the midfield is to move the ball rapidly against the four four two. The four three three will always outnumber the midfield two and will force the opposition wingers to come help support the two center mid, subsequently freeing up the wing for the fullbacks to shift into the three midfielders should also aim to be on staggered lines and create triangle passing options. Given the importance of the midfield three, it's vital that they are in constant movement and shifting into areas high up the pitch. Let's take a look at some of the movements that are common with the ball shifting out wide to the fullbacks. From here the winger could come short to drag the opposition fullback out of position freeing up the space for the center mid to move into. By doing this, the team can create an overload on the wing and will also free up the center for the striker to drop deep and lay the ball off to either the box to box midfielder or even the other winger cutting inside. Another example could see the winger move into the half space and with the fullback unloading the ball to the midfield overlapping on the wing and stretching the opposition's back four. The four three three is also an excellent formation at exposing space on the opposite wing. The term tikitaka is not just a fancy word used to describe intricate passes but is also a fantastic tactic that forces the opposition to commit more and more players to stop the movement on the wing. And by doing this, we'll usually free the space on the other flank for a quick switch of play where the winger or fullback can find themselves in a one v one situation further up the pitch when entering the final third, here is where the box to box midfielder and the center attacking midfielder have a big impact on their attacking creativity. The attacking mid will usually shift from side to side to support the transitional phase before providing precise passes in behind while the box to box midfielder can act as a backwards pass if needed. If there's little space to move into when moving into the opposition's box it's common for the four three three to have an incredible amount of attacking players available. The three forwards will occupy the box the two midfielders will be used as support on each flank and the width will usually be provided by one of the two fullbacks while the other will often move further in field and add to their defensive numbers. The inverted fallback we see under Pep guardiola is an excellent example of this. This final position leaves a lot of options available for the team to exploit. The fullback could cut down the flank and cross to the striker or he could choose to lay the ball off to one of the center mitts attempting some quick overlaps and one two passing plays or even take an effort from outside the box as many creative camps are capable of doing from this position. The advantages of this formation is that the attacking threats it possesses in the final third can't always be structured or analyzed and can be created by a moment of individual genius by one of the players making it extremely difficult to defend against. Now, although it does commit a lot of players on the attack it is still a very reliable defensive lineup. As we saw in the final third there can be many players pushing the opposition's back line but the four three three is still able to retain its defensive shape usually with the two centrebacks, the holding mid and at times one of the fullbacks. These three or four players are often enough to close down the opposition's team striker and win any loose balls and as a result, the four three three is an excellent formation for pinning teams back and pressing high up the pitch. No formation embodies the high press better than the four three three from Iax in 1995 to Liverpool in 2019. This lineup is excellent at winning possession back early and venting any attacking threat. With the ball in possession of the goalkeeper, the striker will usually close down the space and force the keeper into one direction. With the ball shifting into the centrebacks, one of the center mids compress the other center back and the winger will cover the fullback. The CDM in this case will cover whichever attacking mid has moved up and will attempt to block any passing lanes into the middle of the pitch. By blocking the team into a specific area it forces the opponents to think fast or to go long, which can often lead to a mistake and help the team turn over possession frequently. And when the team is able to regain possession the player on the ball will immediately have players around him to help start their attack. If the opposition is able to break down the press then the four three three will usually shift into a four five one or 4141 formation. The wingers will drop in alongside the midfielders and together will aim to push play out wide. Another advantage of this formation is that having three midfielders will create a lot of congestion in the middle of the pitch, which will make it hard for teams to make any substantial plays on the edge of the box. And as a result will attempt to attack down the flanks where it's easier to defend, as they can use the touchline as an extra defender. In the final third, the two centrebacks will be tasked with clearing headers and the three midfielders will attempt to gather any loose balls to start their attacking phase and potentially hit teams on the counter on the back foot. Teams in a four three three can sometimes choose to defend with seven players and the attacking three can stick high up the pitch given that if they defend effectively, this can immediately create a counterattacking opportunity and put the opposition on the back foot. Just like with all formations, the four three three is excellent when every part is moving together and the team is working as a unit. However, if this unit breaks down it can be vulnerable to some specific attacking moves. First off, if the team gets a bit too excited and commits both fallbacks to the attack then this formation can be vulnerable to counterattacks, specifically down the wings. While the center of the pitch will always have a good amount of COVID The flanks can often be exposed to balls over the midfield line and into pockets of space behind the fallback. Secondly, this formation requires constant work from the center midfielders and will require excellent stamina and a fantastic work rate to support the team. If the opposition is able to close them down effectively and not give them any space, then the four three three will have no attacking power and will struggle to get the ball into the final third. Finally, one other issue that this formation can bring is if the wingers don't track back. While it is an excellent attacking formation, players can often get stuck in this mentality of constantly attacking and can often find themselves too reluctant to perform their defensive duty. In a scenario like this, it would be too easy for the opposition to be in a two v one situation out wide and deliver balls into the box. So to recap, the four three three is an excellent offensive formation for teams that like to move the ball quickly and attack with high numbers. The natural shape of this formation allows players to always have a passing option available and to exploit spaces in the opposition's backline while also having a strong defensive backbone to rely on. Now, although the four three three does seem to have lost some of its popularity to other formations such as the 4231 or the three four three, it will definitely still be one of the most used formations for years to come. Now, what do you think of the four three three? Leave your thoughts in the comments down below, and if you like this type of video, please leave a like and subscribe to the channel. Thanks for watching.
              </Card.Text> */}
            </Card.Body>
            
          </Card>
        </div>
      </div>
        </Col>
        
        
      </Row>

      
    </div>
  );
}
export default PlayerComponent;

{
  /* <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */
}
