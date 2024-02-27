import Map from 'react-map-gl';

const EventMap = () => {
  return (
    <>
    <Map
    mapLib={import('mapbox-gl')}
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{height: 300,overflow:'hidden',borderRadius:8}}
    mapboxAccessToken='pk.eyJ1IjoiYXJpZmtoYW4yMzAiLCJhIjoiY2xwanlvbWRkMDRsczJrb3A5cjU4b3BmcSJ9.VvUKZhn5vO4D4Ptnwx7Gaw'
    mapStyle="mapbox://styles/mapbox/streets-v9"
  />
    
  </>
  );
};

export default EventMap;
