import './App.css';
import SauBodyA from './components/SauBodyA';
import SauBodyB from './components/SauBodyB';
import SauBodyC from './components/SauBodyC';
import SauFooter from './components/SauFooter';
import SauHeader from './components/SauHeader';


function App() {
  return (
    <>
    <SauHeader/>
    <SauBodyC teamA="SAU" teamB="PDU" scoreA={5} scoreB={10} eventClick={()=>{alert("EiEi....")}}/>
    <SauBodyC teamA="ABU" teamB="DDU" />
    <SauBodyC eventClick={()=>{alert("Hi...Hey...Hum")}} />
    <SauBodyA value1="Hello" value2="SAU"/>
    <br/>
    <SauBodyA value1="Hi" value2="CS"/>
    <br/>
    <SauBodyA value1="Hey" value2="DTI"/>
    <br/>
    <SauBodyB sauimg="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg"  name="อภิสิทธิ์ กุลคำ" age ={19} gpa="9.99" address={{
      homeno: 158,
      province:"Bangkok",
      postcode: 10160
    }} 
    subject = {["java","dart","C#"]}
    />
    <br/>
    <SauBodyB sauimg="https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874__340.jpg" name="อิอิ อุอุ" age={25} gpa={2.55 < 3 ? "A":"B"} address={{
      homeno: 155,
      province:"Chonburi",
      postcode: 20150
    }}
    subject = {["VB","HTML"]} 
    />
    <SauFooter/>
    </>
  );
}

export default App;
