<template>
  <div class="bod">
    <div class="objectDetails">
      <h1>Object details</h1>
      <div class="metrics">
        <div class="subLegend apartmentSize">
          <p>Size</p>
          <h2>{{ objectDetails.size }}, {{ objectDetails.structure }}</h2>
        </div>
        <div class="subLegend apartmentType">
          <p>Type</p>
          <h2>
            {{ objectDetails.type }}, {{ objectDetails.condition }},
            {{ objectDetails.heating.length > 1 ? "heated" : "no heating" }}
          </h2>
        </div>
        <div class="subLegend netRent">
          <p>Net rent</p>
          <h2>
            {{ rentalDetails.netRent }} $, paid on
            {{ rentalDetails.rentalPaymentDate }}th of the month
          </h2>
        </div>
        <div class="subLegend rentalStatus">
          <p>Rental status</p>
          <h2>{{ rentalDetails.rentalStatus }} $</h2>
        </div>
        <div class="sublegend availableShares">
          <p>Available shares</p>
          <h2>{{ availableBricks }}/{{ bricks }}</h2>
        </div>
      </div>
      <div class="quote">
        <p>{{ objectDetails.quote }}</p>
      </div>
    </div>
    <div class="providerDetails">
      <h1>About the provider</h1>
      <h3>{{ spv.owner }}</h3>
      <p>{{ spv.companyPurposes }}</p>
      <p>Email: {{ spv.email }}</p>
      <br />
      <p>Tax number: {{ spv.taxNumber }}</p>
      <p>Company website: www.brickwise.at</p>
      <br />
    </div>
    <div class="downloads">
      <div v-for="document in documents" :key="document.id">
        <a
          v-if="document.src.length > 1"
          :href="document.src"
          download="file"
          target="_blank"
          >{{ document.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ["asset"],
  data() {
    return {
      objectDetails: {
        firstParagraph:
          "Die regional berühmte Trafik Kolmann ist Teil der Wohn- und Gewerbeanlage Seenah-Wohnen die 2021 neu errichtet wurde. Die Immobilie zeichnet sich durch ihr charmantes Flair und die ausgezeichnete Lage inmitten modernster und bester Infrastruktur und wunderschöner Grünanlagen sowie ihre unmittelbare Nähe zum wunderschönen Wörthersee aus.",
        secondParagraph:
          "Das Objekt besteht aus einem großzügigen Verkaufsraum sowie einem Büro und einer Lagerfläche. Der Verkaufsraum ist ideal auf die Kund:innenbedürfnisse abgestimmt und mit modernster Technik, sowie einer Klimaanlage ausgestattet.",
        quote:
          "Das Trafikant:innenschloß am Wörthersee ;-) der Traum aller Immobilieninvestor:innen",
        floor: 0,
        size: "83.35",
        type: "Gewerbe",
        condition: "Neu",
        structure: "2 Räume",
        heating: "Fernwärme",
        properties: [],
        energyDemandUrl:
          "https://cdn.brickwise.at/ef22c6bc-d8db-41bb-81c2-84e607a1ec84.png",
        floorPlanUrl:
          "https://cdn.brickwise.at/068cc853-19e5-40a0-9005-8d4f5248a718.jpg",
        url: null,
      },
      locationDetails: {
        coordinates: {
          lat: 46.621171,
          lng: 14.2661673,
        },
        firstParagraph:
          "Die Trafik ist einer der Mittelpunkte der Fachmarktzeile Seenah Wohnen und liegt nur wenige Meter von Klagenfurts schönster Grünanlage, dem Europapark entfernt. Durch die optimale Verkehrsanbindung ist die Trafik aus dem  Stadtzentrum sowie allen anderen Klagenfurter Bezirken in kurzen Intervallen rasch erreichbar. In unmittelbarer Nähe findest du zahlreiche Wohnanlagen, ein Strandbad, Restaurants und Einkaufsmöglichkeiten, wodurch eine hohe Frequenz gewährleistet ist.",
        microParagraph:
          "Klagenfurt liegt am Ostufer des Wörthersees und ist die Hauptstadt des südösterreichischen Bundeslandes Kärnten. Mit 102.138 Einwohnern (Stand 1. Jänner 2021) ist es die größte Stadt Kärntens und die sechstgrößte Stadt Österreichs. Klagenfurt ist unter anderem Sitz der Kärntner Landesregierung, der Alpen-Adria-Universität, der Gustav Mahler Privatuniversität für Musik, der FH Kärnten und des internationalen Flughafens. Durch die attraktive Innenstadt mit Plätzen und Altstadtgebäuden sowie Kulturangeboten und der Nähe zum Wörthersee ist Klagenfurt auch touristisch äußerst bedeutsam. Auf slowenisch heißt Klagenfurt übrigens Celovec ob Vrbskem jezeru.",
        macroParagraph:
          "Einer der schönsten Flecken Österreichs: Das Minimundus, der Reptilienzoo, der wunderschöne Europapark, das Klagenfurter Strandbad und das blitzblaue klare Wasser des Wörthersees sind nur wenige Gehminuten entfernt. Hier tummeln sich Groß und Klein, Einheimische und Touristen und sogar Ironman Athleten wenn sie durch den Lendkanal schwimmen, der in unmittelbarer Nachbarschaft liegt.",
        imageUrl:
          "https://cdn.brickwise.at/ccba9835-9454-4668-8239-1b0ca239f7bd.jpg",
      },
      rentalDetails: {
        firstParagraph:
          "Das aktuelle Mietverhältnis begann am 01. März 2021 und wurde unbefristet abgeschlossen, wobei ein 3 Jähriger Kündigungsverzicht seitens der Mieterin vereinbart wurde.",
        rentalPaymentDate: 15,
        rentalStatus: "Unbefristet",
        statisticalRentalStatus: 100,
        netRent: 12619,
        propertyManagement: 0,
        assetManagement: 631,
        rentalReserve: 650,
        rentalReturn: 3.15,
        rentalExcess: 11338,
        paragraph: null,
      },
      investmentDetails: {
        properties: [],
        firstParagraph:
          "Als Investor:in kannst du dich am Kauf der hier beschriebenen Immobilie in Form von digitalen Immobilienanteilen beteiligen. Digitale Immobilienanteile sind tokenisierte Substanzgenussrechte auf Basis der Investmentbedingungen der Emittentin.\nAls Investor:in kassierst du monatlich Mieteinnahmen (abzüglich Kosten und Gebühren) und du kannst deine digitalen Anteile jederzeit flexibel über den Brickwise Marktplatz verkaufen, und so von der Wertentwicklung der Immobilie profitieren.",
        secondParagraph: "",
        ISIN: "AT0000A2U5V3",
        spvUrl: "https://cdn.brickwise.at/spv-e1f2f9ff.svg",
      },
      id: "AT0000A2U5V3",
      tokenId: "",
      title: "Trafik, Kohldorferstrasse 102, Klagenfurt",
      location: "Klagenfurt, Österreich",
      address: "Kohldorferstrasse 102, Top Gewerbe 2",
      postalCode: "9020",
      quote:
        "Das Trafikant:innenschloß am Wörthersee ;-) der Traum aller Immobilieninvestor:innen",
      stage: "primary",
      sharePrice: 100.02,
      availableBricks: 1339,
      bricks: 3600,
      actualOffer: 0,
      date: "31/01/2022",
      investmentConditionsUrl:
        "https://cdn.brickwise.at/99516b4f-7dc8-440b-b125-41046a1249ef.pdf",
      expertOpinion: 5,
      expertOpinionUrl:
        "https://cdn.brickwise.at/cdde6765-8049-4d77-abd7-a4c1edd59e77.pdf",
      spvBasicInformationUrl: "",
      spvInformationUrl: "",
      images: [
        {
          _id: "61b229b72f0a768430d407a5",
          src:
            "https://cdn.brickwise.at/557c0021-da6f-4bea-b0cd-b440021da7b1.jpg",
        },
        {
          _id: "61b229b72f0a7635aad407a6",
          src:
            "https://cdn.brickwise.at/9ee571fb-5fec-48ff-82fd-2db86af93769.jpg",
        },
        {
          _id: "61b229b72f0a7612d6d407a7",
          src:
            "https://cdn.brickwise.at/1e547902-a465-43c9-9d92-7c833c4f9147.jpg",
        },
        {
          _id: "61b229b72f0a765192d407a8",
          src:
            "https://cdn.brickwise.at/d4ccd62c-258e-4fad-9fcd-35ba9029a5cf.jpg",
        },
        {
          _id: "61b229b72f0a764fffd407a9",
          src:
            "https://cdn.brickwise.at/5ed9c1a5-d186-4a24-8abe-9a43048af0e7.jpg",
        },
      ],
      payouts: [],
      documents: [
        {
          _id: "61540bc760d5416ee53e17bd",
          name: "Energieausweis",
          src:
            "https://cdn.brickwise.at/09dd75ca-af87-4b50-af89-5832073a6872.pdf",
        },
        {
          _id: "61540bc760d54159073e17be",
          name: "Mietvertrag",
          src:
            "https://cdn.brickwise.at/731a7a91-c48f-410f-ad25-edf9c5420a17.pdf",
        },
        {
          _id: "6186b2c96196806006f877ea",
          name: "",
          src: "",
        },
      ],
      spv: {
        address: {
          street: "Börseplatz 4",
          postCode: "1010",
          city: "Wien",
          country: "Österreich",
        },
        paymentProvider: {
          mangopayId: "",
          mangopayWalletId: "",
        },
        _id: "61ad20f22f0a76b69bd3e1ed",
        owner: "Brickwise Real Estate GmbH",
        email: "realestate@brickwise.at",
        taxNumber: "FN 549470 w",
        companyPurpose: "Halten, Verwalten und Vermieten von Immobilien",
        companyName: "Brick Qogir GmbH & Co KG",
      },
      url: "https://bwrealestate.app.brickwise.at",
    };
  },
};
</script>
<style scoped>
.bod,
.objectDetails,
.providerDetails,
.downloads,
.subLegend {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.subLegend,
h1,
h2 {
  margin-bottom: 16px;
}
.asset {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.assetData {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 24px;
}
.metrics {
  display: flex;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 24px;
  justify-content: flex-start;
}
p {
  margin-bottom: 0px;
}
h1 {
  margin-top: 0px;
  margin-bottom: 0px;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 24px;
  width: 100%;
}
</style>
