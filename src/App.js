import VoyageAxis from "./components/VoyageAxis";

function App() {
  return (
    <div className="App">
      <VoyageAxis />
    </div>
  );
}

export default App;
/*
1. Difference between the departure time, current time and arrival time - Karlshamn - Klaipeda is 12hours so 12 dots and each of them is ca. 8%
2. Pin should appear at the point of start if it is not departure yet
3. Pin should appear at the point of finish if it is past time of arrival
4. "Gennemført" dots should appear in dark blue (picture)

Start at 21 and arrival at 09
Get current time and translate it to the simplest point of hours.

Make them all into string! Important!!!!

Props:
port Of Loading - string - Karlshamn
port of Discharge - string - Klaipeda
departureTime - string - Time
arrivalTime - string - Time

useState - setting initial state
useEffect to make it work and do if statements

maybe setInterval?

Two components? one ProgressBar and Another the dots and maybe the third one of the ferry?

Dots at the beginning and the end should have their own props
*/
