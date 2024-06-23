import React from "react";



const HomeCategory = () => {
  return (
    <section className=" py-14 md:py-20 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
      {/* <div className="absolute top-0 left-0 rotate">
				<img
				className="w-[220px] opacity-25"
					src="https://c8.alamy.com/comp/2BX5KEN/pouring-oil-for-cooking-in-a-bottle-isolated-on-white-background-2BX5KEN.jpg"
					alt=""
				/>
			</div> */}

      <div className="container px-4 mx-auto relative">
        <p className="text-[32px] md:text-5xl leading-tight font-bold text-center mb-20 ">
          Top Category
        </p>

        <div className="relative ">
          <div className="grid grid-cols-12 gap-8 ">
			{/* category */}
            <div className=" col-span-12 sm:col-span-6 md:col-span-4 my-12">
              <a
                href="#!"
                className=" bg-white dark:bg-slate-800 shadow-xl relative flex items-end justify-center min-h-[155px] rounded-t-[30px] rounded-b-[15px] border dark:border-slate-700 "
              >
                <div className=" absolute -top-[75px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-full flex justify-center items-center h-40 w-40">
                  <img src="https://greenmartbd.net/storage/upload/product/phT3W2MDVDODfNv1lZ62K8qedUEAIHbtD5ouqvM5.png" alt="" className="w-20" />
                </div>
                <h4 className="text-2xl font-medium mb-5">SARISHA OIL</h4>
              </a>
            </div>

			<div className=" col-span-12 sm:col-span-6 md:col-span-4 my-12">
              <a
                href="#!"
                className="bg-white dark:bg-slate-800 shadow-xl relative flex items-end justify-center min-h-[155px] rounded-t-[30px] rounded-b-[15px] border dark:border-slate-700 "
              >
                <div className=" absolute -top-[75px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-full flex justify-center items-center h-40 w-40">
                  <img src="https://www.harniva.com/assets/backend/admin/plugins/source/hakkimizda/kalitelibal.png" alt="" className="w-20" />
                </div>
                <h4 className="text-2xl font-medium mb-5 ">HONEY / মধু</h4>
              </a>
            </div>

			<div className=" col-span-12 sm:col-span-6 md:col-span-4 my-12">
              <a
                href="#!"
                className="bg-white dark:bg-slate-800 shadow-xl relative flex items-end justify-center min-h-[155px] rounded-t-[30px] rounded-b-[15px] border dark:border-slate-700 "
              >
                <div className=" absolute -top-[75px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-full flex justify-center items-center h-40 w-40">
                  <img src="https://media.e-valy.com/cms/products/images/f4b3265d-df5e-4835-add4-0cd2654235d3" alt="" className="w-20" />
                </div>
                <h4 className="text-2xl font-medium mb-5">GHEE / ঘি</h4>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
