import { getStrapiURL } from "@/utils/helpers";
import qs from "qs";

const baseUrl = getStrapiURL();

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getHomePageData() {
  const url = new URL("/api/home-page", baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.hero-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              head: {
                populate: true,
              },
            },
          },
          "layout.property-carousel": {
            populate: {
              properties: {
                populate: {
                  carouselImage: {
                    fields: ["url", "alternativeText"],
                  },
                  filter_options: {
                    fields: ["label", "value"],
                  },
                },
              },
              head: {
                populate: true,
              },
            },
          },
          "layout.offer-banner": {
            populate: {
              cta: {
                populate: true,
              },
              head: {
                populate: true,
              },
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
          "layout.usp-counter": {
            populate: {
              counts: true,
            },
          },
          "layout.newsletter": {
            populate: {
              head: {
                populate: true,
              },
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
          "layout.blogs-section": {
            populate: {
              head: {
                populate: true,
              },
              body: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
            },
          },
          "layout.usp-section": {
            populate: {
              usps: {
                populate: {
                  head: {
                    populate: true,
                  },
                },
              },
            },
          },
          "layout.testimonial-section": {
            populate: {
              head: {
                populate: true,
              },
              body: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
            },
          },
          "layout.brand-carousel": {
            populate: {
              clients: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
            },
          },
          "layout.best-seller-section": {
            populate: {
              head: {
                populate: true,
              },
              filters: {
                populate: {
                  filter_options: {
                    fields: ["label", "value"],
                  },
                  default_filter: {
                    fields: ["label", "value"],
                  },
                },
              },
              properties: {
                populate: {
                  carouselImage: {
                    fields: ["url", "alternativeText"],
                  },
                  slide_images: {
                    populate: {
                      image: {
                        fields: ["url", "alternativeText"],
                      },
                    },
                  },
                  filter_options: {
                    fields: ["label", "value"],
                  },
                  tabs: {
                    populate: true,
                  },
                  location: {
                    populate: true,
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

export async function getNavbarData() {
  const url = new URL("/api/navbar", baseUrl);

  url.search = qs.stringify({
    populate: {
      logo: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      cta: {
        populate: true,
      },
      navigation_links: {
        populate: {
          dropdown_links: true,
          mega_menu: {
            populate: {
              headers: {
                populate: true,
              },
              mega_menus: {
                populate: {
                  menu_items: {
                    populate: {
                      menu_list: {
                        populate: true,
                      },
                    },
                  },
                  special_item: {
                    populate: {
                      cta: {
                        populate: true,
                      },
                      banner: {
                        populate: {
                          image: {
                            fields: ["url"],
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          page_link: {
            populate: true,
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

export async function getPropertyData(slug) {
  const url = new URL("/api/properties", baseUrl);

  url.search = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      carouselImage: {
        fields: ["url", "alternativeText"],
      },
      slide_images: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      filter_options: {
        fields: ["label", "value"],
      },
      tabs: {
        populate: true,
      },
      location: {
        populate: true,
      },
    },
  });

  const data = await fetchData(url.href);
  return data[0];
}

export async function getLocationsData() {
  const url = new URL("/api/locations", baseUrl);
  return await fetchData(url.href);
}
