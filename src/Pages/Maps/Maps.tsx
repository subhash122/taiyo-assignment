import CovidChart from "@/Components/CovidChart/CovidChart";
import CovidMap from "@/Components/CovidMap/CovidMap";
import { getData } from "@/Services/dataService"
import { useMemo } from "react";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "react-query"

function Maps() {
  const { data, isLoading, isSuccess } = useQuery({ queryKey: 'visulizationData', queryFn: getData })
  let graphData = useMemo(() => {
    if (data) {
      const { cases, deaths, recovered } = data[0].data;
      let temparr: any[] = []
      Object.entries(cases).map((item) => {
        // console.log(deaths[item[0]])
        let date = new Date(item[0])
        temparr.push({
          title: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`,
          cases: item[1],
          deaths: deaths[item[0]],
          recovered: recovered[item[0]]
        })
      })
      return temparr;
    }
  }, [data])
  let mapData = useMemo(() => {
    if (data) {
      const countriesData = data[1].data;
      let letfilteredCounteiesData: any[] = countriesData.map((item) => {
        return {
          country: item.country,
          lat: item.countryInfo.lat,
          lng: item.countryInfo.long,
          active: item.active,
          deaths: item.deaths,
          recovered: item.recovered,
        }
      })

      return letfilteredCounteiesData;
    }

  }, [data])

  return (
    <div>
      {
        isLoading && <div className="flex justify-center"> <Skeleton count={2} className="mt-5 justify-center" style={{
          width: 900,
          height: 350,
        }} />
        </div>}
      {isSuccess && <>
        <CovidChart data={graphData} />
        <CovidMap data={mapData} />
      </>
      }
    </div>
  )
}

export default Maps
