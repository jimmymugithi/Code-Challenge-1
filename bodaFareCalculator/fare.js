  function calculateBodaFare(distanceInKm) {
    if (isNaN(distanceInKm) || distanceInKm <= 0) {
      console.log("Tafadhali ingiza kilomita sahihi (nambari iliyo juu ya sfuri).");
      return;
    }
const BASE_FARE = 50;          // KES
  const CHARGE_PER_KM = 15;      // KES/km

    const rideFare     = BASE_FARE;
    const distanceFare = distanceInKm * CHARGE_PER_KM;
    const totalFare    = rideFare + distanceFare;

    console.log(`Uko kwote? Io ni ${distanceInKm} km:
    Ukikalia Pikipiki: KES ${rideFare}
    Mpaka Uko: KES ${distanceFare}
    Total: KES ${totalFare}

    Panda Pikipiki!`);
  }

  // --- Prompt the user and run ---
  const answer = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
  calculateBodaFare(Number(answer));

