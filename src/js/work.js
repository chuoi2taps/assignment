import { render } from "./common";
import { featureWork } from "./data";

function showFeature(features){
    if(!Array.isArray(featureWork)|| featureWork.length == 0) return[];
      let result = "";
      for(let i = 0; i< features.length; i++){
        const feature = features[i];
        result += `
        <div class="grid md:grid-cols-[246px,auto] gap-8 border-b py-8">
        <div>
            <a href ="/workdetail.html?id=${feature.id}"><img src="${feature.img}" width="246px" height="246px" class="rounded w-full" alt=""></a>
        </div>
        <div>
            <h3><a href="/workdetail.html?id=${feature.id}" class="text-[30px] text-[#21243D] font-bold hover:underline">${feature.name}</a></h3>
        <div class="flex space-x-4 items-center py-5">
            <span class="inline-block bg-[#21243D] py-1 px-2 font-bold text-white rounded-full">${feature.year}</span>
            <span class="text-[#8695A4]">${feature.cate}</span>
        </div>
            <p class="text-[#21243D]">
            ${feature.description}
                </p>
            </div>
            </div>
        `
  }
    return result;
  }
  render("feature-works", showFeature(featureWork))