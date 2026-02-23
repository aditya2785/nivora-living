import SingleStat from "@/components/SingleStat";

const StatsContainer = () => {
  return (
    <div className="flex gap-14 max-[660px]:flex-col">
      <SingleStat
        showStars={true}
        mainText="4.9"
        descText={<p>Customer Satisfaction</p>}
      />

      <SingleStat
        showStars={false}
        mainText="Handcrafted"
        descText={
          <p className="leading-6">
            Premium Metal <br /> Craftsmanship
          </p>
        }
      />

      <SingleStat
        showStars={false}
        mainText="Global"
        descText={
          <p className="leading-6">
            Shipping Across <br /> Multiple Countries
          </p>
        }
      />
    </div>
  );
};

export default StatsContainer;