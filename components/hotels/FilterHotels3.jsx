"use client";

import React, { useState } from "react";
import FilterHotelsTabs from "./filter-tabs/FilterHotelsTabs";
import FilterHotels from "./FilterHotels";

export default function FilterHotels3({ blockData }) {
  const { head, filters, properties } = blockData;

  const [filterOption, setFilterOption] = useState(
    filters?.default_filter?.value
  );
  return (
    <section className="layout-pt-sm layout-pb-lg">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">{head?.heading}</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">
                {head?.subHeading}
              </p>
            </div>
          </div>
          {/* End .col-auto */}

          <div className="col-auto tabs -pills-2 ">
            <FilterHotelsTabs
              filterOptions={filters?.filter_options}
              filterOption={filterOption}
              setFilterOption={setFilterOption}
            />
          </div>
          {/* End .col-auto */}
        </div>
        {/* End .row */}

        <div className="relative overflow-hidden pt-40 sm:pt-20">
          <div className="row y-gap-30">
            <FilterHotels filterOption={filterOption} properties={properties} />
          </div>
        </div>
        {/* End relative */}
      </div>
    </section>
  );
}
