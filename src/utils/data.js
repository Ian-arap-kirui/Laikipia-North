import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import CDFLOGO from "../assets/cdf-official-logo.png";
import sosianMap from "../assets/sosian-ward-clipped.png";
import sosianImg from "../assets/sosian-ward-img.jpg";
import segeraMap from "../assets/segera-ward-clipped.png";
import mukogodoMap from "../assets/mukogodo.png";
import ngcdfImg from "../assets/cdf-official-logo.png";
import nanyukiOffice from "../assets/lnc-nanyuki.png";
import bungeTowers from "../assets/lnc-bunge-towers.png";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { projects } from "./projectsData";

export const constituencyData = [
  {
    title: "Laikipia North Constituency",
    motto: "",
    about:
      "Laikipia North is an electoral constituency in Kenya. It is one of three constituencies of Laikipia County. The constituency was established for the 2013 elections. It is among the ASAL counties in Kenya. The constituency lies in an area of ApproximatelySq. Km 2,295.50 and its population is approximately 81,094 The Member of Parliament for this constituency is, Honorable Sarah Lekorere.",
    hq: "Lakipia, Kenya",
    vision:
      "To be a model constituency in application of National Government Constituency Development Fund for socio-economic development.",
    mission:
      "To provide transformative leadership and oversight for prudent management of all NG-CDF projects within Laikipia North Constituency.",
    googleMapsLink: "",
    coreValues: [
      {
        value: "Commitment and team work",
      },
      {
        value: "Advocacy for constituents Participation and involvement",
      },
      {
        value: "Transparency and Accountability",
      },
      {
        value: "Professionalism and Integrity",
      },
      {
        value: "Neutrality and Objectivity",
      },
      {
        value: "Timeliness and Excellence",
      },
    ],
    wards: [
       {
        id: 0,
        title: "Mukogodo West Ward",
        img: mukogodoMap,
        img1: sosianImg,
        desc: "Works on pastoralism and water access.",
        wardList: [
          {
            listItem: "County Assembly Ward No.:",
          },
          {
            listItem: " County Assembly Ward Name: Mukogodo West",
          },
          {
            listItem: " County Assembly Ward Population (Approx.):",
          },
          {
            listItem: " County Assembly Ward Area In Sq. Km (Approx.):",
          },
          {
            listItem: " County  Assembly Ward Description: comprises part of",
          },
        ],
      },
     
          {
        id: 1,
        title: "Segera Ward",
        img: segeraMap,
        img1: sosianImg,
        desc: "Focuses on healthcare and wildlife conservation.",
        wardList: [
          {
            listItem: "County Assembly Ward No.:",
          },
          {
            listItem: " County Assembly Ward Name: Segera",
          },
          {
            listItem: " County Assembly Ward Population (Approx.):",
          },
          {
            listItem: " County Assembly Ward Area In Sq. Km (Approx.):",
          },
          {
            listItem: " County  Assembly Ward Description: comprises part of",
          },
        ],
      },
      {
        id: 2,
        title: "Mukogodo East Ward",
        img: mukogodoMap,
        img1: sosianImg,
        desc: "Emphasizes education and environmental sustainability.",
        wardList: [
          {
            listItem: "County Assembly Ward No.:",
          },
          {
            listItem: " County Assembly Ward Name: Mukogodo East",
          },
          {
            listItem: " County Assembly Ward Population (Approx.):",
          },
          {
            listItem: "County Assembly Ward Area In Sq. Km (Approx.):",
          },
          {
            listItem: "County Assembly Ward Description: comprises part of",
          },
        ],
      },

   {
        id: 3,
        title: "Sosian Ward",
        img: sosianMap,
        img1: sosianImg,
        desc: "Known for agriculture and community development projects.",
        wardList: [
          {
            listItem: "County Assembly Ward No.:",
          },
          {
            listItem: " County Assembly Ward Name: Sosian",
          },
          {
            listItem: " County Assembly Ward Population (Approx.):",
          },
          {
            listItem: " County Assembly Ward Area In Sq. Km (Approx.):",
          },
          {
            listItem: " County  Assembly Ward Description: comprises part of",
          },
        ],
      },
     
    ],
    projects: projects,
    services: [
      {
        id: 0,
        title: "NGCDF",
        link: "NGCDF",
        img:nanyukiOffice,
        description:
          "We manage and implement the National Government Constituencies Development Fund (NGCDF), focusing on funding projects in education, health, and infrastructure that impact the community.",
        members: [
          {
            name: "Charles Kimotho Ndungu",
            designation: "Male Youth Representative",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Naundoi Lomoni Rukinyi",
            designation: "Male Adult Representative",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Julia Nyambura Wachira",
            designation: "Female Youth Representative",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Maria Adeket Iyanai",
            designation: "Female Adult Representative",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Dickson Makin Leshepa",
            designation: "Representative of Persons Living with Disability",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Daniel Kimalel Matunge",
            designation: "Nominee of the Constituency Office (Male)",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Julia Cheporwas Lochingamoi",
            designation: "Nominee of the Constituency Office (Female)",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
        ],
        allocations: [
          { id: 0, year: "2023/2024", amount: "166,593,720.00" },
          { id: 1, year: "2022/2023", amount: "138,215,033.00" },
          { id: 2, year: "2021/2022", amount: "137,088,879.00" },
          { id: 3, year: "2020/2021", amount: "137,088,879.31" },
          { id: 4, year: "2019/2020", amount: "137,367,724.14" },
          { id: 5, year: "2018/2019", amount: "109,040,875.50" },
          { id: 6, year: "2017/2018", amount: "98,189,655.17" },
          { id: 7, year: "2016/2017", amount: "81,896,551.72" },
          { id: 8, year: "2015/2016", amount: "111,667,928.00" },
          { id: 9, year: "2014/2015", amount: "105,392,828.00" },
          { id: 10, year: "2013/2014", amount: "73,494,699.00" },
        ],
        disbursments: [
          {
            id: 0,
            year: "2023/2024",
            amount: "40,000,000.00",
            date: "Apr 18, 2024",
          },
          {
            id: 1,
            year: "2023/2024",
            amount: "40,000,000.00",
            date: "Mar 1, 2024",
          },
          {
            id: 2,
            year: "2023/2024",
            amount: "30,000,000.00",
            date: "Jan 15, 2024",
          },
          {
            id: 3,
            year: "2022/2023",
            amount: "47,215,033.00",
            date: "Aug 4, 2023",
          },
          {
            id: 4,
            year: "2022/2023",
            amount: "16,000,000.00",
            date: "Jun 21, 2023",
          },
          {
            id: 5,
            year: "2022/2023",
            amount: "18,000,000.00",
            date: "Jun 15, 2023",
          },
          {
            id: 6,
            year: "2022/2023",
            amount: "12,000,000.00",
            date: "Jun 4, 2023",
          },
          {
            id: 7,
            year: "2022/2023",
            amount: "12,000,000.00",
            date: "Mar 1, 2023",
          },
          {
            id: 8,
            year: "2022/2023",
            amount: "5,000,000.00",
            date: "Feb 15, 2023",
          },
          {
            id: 9,
            year: "2022/2023",
            amount: "7,000,000.00",
            date: "Jan 27, 2023",
          },
          {
            id: 10,
            year: "2022/2023",
            amount: "14,000,000.00",
            date: "Jan 27, 2023",
          },
          {
            id: 11,
            year: "2022/2023",
            amount: "7,000,000.00",
            date: "Dec 24, 2022",
          },
          {
            id: 12,
            year: "2021/2022",
            amount: "24,088,879.00",
            date: "May 6, 2022",
          },
          {
            id: 13,
            year: "2021/2022",
            amount: "18,000,000.00",
            date: "Apr 7, 2022",
          },
          {
            id: 14,
            year: "2021/2022",
            amount: "12,000,000.00",
            date: "Mar 14, 2022",
          },
          {
            id: 15,
            year: "2021/2022",
            amount: "12,000,000.00",
            date: "Feb 23, 2022",
          },
          {
            id: 16,
            year: "2021/2022",
            amount: "5,000,000.00",
            date: "Feb 14, 2022",
          },
          {
            id: 17,
            year: "2021/2022",
            amount: "44,000,000.00",
            date: "Oct 28, 2021",
          },
          {
            id: 18,
            year: "2020/2021",
            amount: "33,000,000.00",
            date: "Jul 22, 2021",
          },
          {
            id: 19,
            year: "2020/2021",
            amount: "12,000,000.00",
            date: "Jun 16, 2021",
          },
          {
            id: 20,
            year: "2020/2021",
            amount: "10,000,000.00",
            date: "May 21, 2021",
          },
          {
            id: 21,
            year: "2020/2021",
            amount: "6,000,000.00",
            date: "May 6, 2021",
          },
          {
            id: 22,
            year: "2020/2021",
            amount: "13,000,000.00",
            date: "Apr 23, 2021",
          },
          {
            id: 23,
            year: "2020/2021",
            amount: "7,000,000.00",
            date: "Mar 22, 2021",
          },
          {
            id: 24,
            year: "2020/2021",
            amount: "10,000,000.00",
            date: "Feb 22, 2021",
          },
          {
            id: 25,
            year: "2020/2021",
            amount: "9,000,000.00",
            date: "Jan 4, 2021",
          },
          {
            id: 26,
            year: "2020/2021",
            amount: "13,000,000.00",
            date: "Mar 16, 2021",
          },
          {
            id: 27,
            year: "2020/2021",
            amount: "6,900,000.00",
            date: "Mar 17, 2021",
          },
          {
            id: 28,
            year: "2019/2020",
            amount: "33,367,724.10",
            date: "Sep 10, 2020",
          },
          {
            id: 29,
            year: "2019/2020",
            amount: "21,000,000.00",
            date: "Aug 26, 2020",
          },
          {
            id: 30,
            year: "2019/2020",
            amount: "15,000,000.00",
            date: "Jul 13, 2020",
          },
          {
            id: 31,
            year: "2019/2020",
            amount: "21,000,000.00",
            date: "Mar 20, 2020",
          },
          {
            id: 32,
            year: "2019/2020",
            amount: "5,000,000.00",
            date: "Dec 19, 2019",
          },
          {
            id: 33,
            year: "2019/2020",
            amount: "14,000,000.00",
            date: "Feb 25, 2020",
          },
          {
            id: 34,
            year: "2019/2020",
            amount: "6,000,000.00",
            date: "Jan 30, 2020",
          },
          {
            id: 35,
            year: "2019/2020",
            amount: "18,000,000.00",
            date: "Nov 19, 2019",
          },
          {
            id: 35,
            year: "2019/2020",
            amount: "4,000,000.00",
            date: "Nov 13, 2019",
          },
          {
            id: 36,
            year: "2018/2019",
            amount: "55,040,875.50",
            date: "Jun 18, 2019",
          },
          {
            id: 37,
            year: "2018/2019",
            amount: "13,000,000.00",
            date: "Apr 30, 2019",
          },
          {
            id: 38,
            year: "2018/2019",
            amount: "11,000,000.00",
            date: "Mar 14, 2019",
          },
          {
            id: 39,
            year: "2018/2019",
            amount: "8,000,000.00",
            date: "Feb 25, 2019",
          },
          {
            id: 40,
            year: "2018/2019",
            amount: "12,000,000.00",
            date: "Feb 19, 2019",
          },
          {
            id: 41,
            year: "2018/2019",
            amount: "10,000,000.00",
            date: "Dec 18, 2018",
          },
          {
            id: 42,
            year: "2017/2018",
            amount: "475,862.00",
            date: "Jul 31, 2018",
          },
          {
            id: 43,
            year: "2017/2018",
            amount: "11,379,310.35",
            date: "Jul 11, 2018",
          },
          {
            id: 44,
            year: "2017/2018",
            amount: "21,929,310.80",
            date: "Jun 4, 2018",
          },
          {
            id: 45,
            year: "2017/2018",
            amount: "21,000,000.00",
            date: "May 15, 2018",
          },
          {
            id: 46,
            year: "2017/2018",
            amount: "37,905,172.00",
            date: "Feb 21, 2018",
          },
          {
            id: 47,
            year: "2017/2018",
            amount: "5,500,000.00",
            date: "Jan 29, 2018",
          },
          {
            id: 48,
            year: "2016/2017",
            amount: "40,948,275.10",
            date: "Mar 20, 2017",
          },
          {
            id: 49,
            year: "2016/2017",
            amount: "36,853,449.00",
            date: "Nov 24, 2016",
          },
          {
            id: 50,
            year: "2016/2017",
            amount: "4,094,827.60",
            date: "Oct 4, 2016",
          },
          {
            id: 51,
            year: "2014/2015",
            amount: "26,348,207.00",
            date: "Nov 26, 2014",
          },
          {
            id: 52,
            year: "2014/2015",
            amount: "26,348,207.00",
            date: "Apr 17, 2015",
          },
          {
            id: 53,
            year: "2013/2014",
            amount: "36,747,349.50",
            date: "Jul 30, 2014",
          },
          {
            id: 54,
            year: "2015/2016",
            amount: "28,667,928.00",
            date: "Apr 27, 2016",
          },
          {
            id: 55,
            year: "2015/2016",
            amount: "28,000,000.00",
            date: "Mar 30, 2016",
          },
          {
            id: 56,
            year: "2015/2016",
            amount: "25,000,000.00",
            date: "Dec 14, 2015",
          },
          {
            id: 57,
            year: "2015/2016",
            amount: "10,000,000.00",
            date: "Nov 18, 2015",
          },
          {
            id: 58,
            year: "2015/2016",
            amount: "10,000,000.00",
            date: "Oct 26, 2015",
          },
          {
            id: 59,
            year: "2015/2016",
            amount: "10,000,000.00",
            date: "Oct 26, 2015",
          },
          {
            id: 60,
            year: "2014/2015",
            amount: "10,000,000.00",
            date: "Nov 11, 2015",
          },
          {
            id: 61,
            year: "2014/2015",
            amount: "5,800,000.00",
            date: "Aug 24, 2015",
          },
          {
            id: 62,
            year: "2014/2015",
            amount: "5,800,000.00",
            date: "Aug 21, 2015",
          },
          {
            id: 63,
            year: "2014/2015",
            amount: "20,548,206.80",
            date: "Jun 22, 2015",
          },
          {
            id: 64,
            year: "2014/2015",
            amount: "11,539,283.00",
            date: "Feb 5, 2015",
          },
          {
            id: 65,
            year: "2014/2015",
            amount: "14,808,924.20",
            date: "Dec 23, 2014",
          },
        ],

        projects: projects,

        proposals: [
          {
            id: 0,
            filename: "2021-2022 Project Proposal",
            status: "Approved",
            upload_date: "April 17, 2023",
            action: () => {
              window.location.href = "path/to/2021-2022-Project-Proposal.pdf";
            },
          },
          {
            id: 1,
            filename: "Laikipia North Financial Year: 2020-2021",
            status: "Approved",
            upload_date: "September 8, 2021",
            action: () => {
              window.location.href =
                "path/to/Laikipia-North-Financial-Year-2020-2021.pdf";
            },
          },
          {
            id: 2,
            filename: "Laikipia North Financial Year: 2019-2020",
            status: "Approved",
            upload_date: "September 8, 2021",
            action: () => {
              window.location.href =
                "path/to/Laikipia-North-Financial-Year-2019-2020.pdf";
            },
          },
          {
            id: 3,
            filename: "Laikipia North Financial Year: 2018-2019",
            status: "Approved",
            upload_date: "September 8, 2021",
            action: () => {
              window.location.href =
                "path/to/Laikipia-North-Financial-Year-2018-2019.pdf";
            },
          },
          {
            id: 4,
            filename: "Laikipia North Financial Year: 2017-2018",
            status: "Approved",
            upload_date: "September 8, 2021",
            action: () => {
              window.location.href =
                "path/to/Laikipia-North-Financial-Year-2017-2018.pdf";
            },
          },
          {
            id: 5,
            filename: "Laikipia North Financial Year: 2016-2017",
            status: "Approved",
            upload_date: "September 8, 2021",
            action: () => {
              window.location.href =
                "path/to/Laikipia-North-Financial-Year-2016-2017.pdf";
            },
          },
          {
            id: 6,
            filename: "Laikipia North Financial Year: 2015-2016",
            status: "Approved",
            upload_date: "September 8, 2021",
            action: () => {
              window.location.href =
                "path/to/Laikipia-North-Financial-Year-2015-2016.pdf";
            },
          },
        ],
      },
      // {
      //   id: 1,
      //   title: "Uwezo Fund",
      //   link: "uwezo-fund",
      //   description:
      //     "Laikipia North is an electoral constituency in Kenya. It is one of three constituencies of Laikipia County. The constituency was established for the 2013 elections. It is among the ASAL counties in Kenya. The constituency lies in an area of ApproximatelySq. Km 2,295.50 and its population is approximately 81,094 The Member of Parliament for this constituency is, Honorable Sarah Lekorere.",
      //   members: [
      //     {
      //       name: "Charles Kimotho Ndungu",
      //       designation: "Male Youth Representative",
      //       profile: CDFLOGO,
      //       socialIcons: [faFacebook, faLinkedin, faX],
      //     },
      //     {
      //       name: "Naundoi Lomoni Rukinyi",
      //       designation: "Male Adult Representative",
      //       profile: CDFLOGO,
      //       socialIcons: [faFacebook, faLinkedin, faX],
      //     },
      //     {
      //       name: "Julia Nyambura Wachira",
      //       designation: "Female Youth Representative",
      //       profile: CDFLOGO,
      //       socialIcons: [faFacebook, faLinkedin, faX],
      //     },
      //     {
      //       name: "Maria Adeket Iyanai",
      //       designation: "Female Adult Representative",
      //       profile: CDFLOGO,
      //       socialIcons: [faFacebook, faLinkedin, faX],
      //     },
      //     {
      //       name: "Dickson Makin Leshepa",
      //       designation: "Representative of Persons Living with Disability",
      //       profile: CDFLOGO,
      //       socialIcons: [faFacebook, faLinkedin, faX],
      //     },
      //     {
      //       name: "Daniel Kimalel Matunge",
      //       designation: "Nominee of the Constituency Office (Male)",
      //       profile: CDFLOGO,
      //       socialIcons: [faFacebook, faLinkedin, faX],
      //     },
      //     {
      //       name: "Julia Cheporwas Lochingamoi",
      //       designation: "Nominee of the Constituency Office (Female)",
      //       profile: CDFLOGO,
      //       socialIcons: [faFacebook, faLinkedin, faX],
      //     },
      //   ],
      //   allocations: [
      //     { id: 0, year: "2023/2024", amount: "166,593,720.00" },
      //     { id: 1, year: "2022/2023", amount: "138,215,033.00" },
      //     { id: 2, year: "2021/2022", amount: "137,088,879.00" },
      //     { id: 3, year: "2020/2021", amount: "137,088,879.31" },
      //     { id: 4, year: "2019/2020", amount: "137,367,724.14" },
      //     { id: 5, year: "2018/2019", amount: "109,040,875.50" },
      //     { id: 6, year: "2017/2018", amount: "98,189,655.17" },
      //     { id: 7, year: "2016/2017", amount: "81,896,551.72" },
      //     { id: 8, year: "2015/2016", amount: "111,667,928.00" },
      //     { id: 9, year: "2014/2015", amount: "105,392,828.00" },
      //     { id: 10, year: "2013/2014", amount: "73,494,699.00" },
      //   ],
      //   disbursments: [
      //     { year: "2023/2024", amount: "40,000,000.00", date: "Apr 18, 2024" },
      //     { year: "2023/2024", amount: "40,000,000.00", date: "Mar 1, 2024" },
      //     { year: "2023/2024", amount: "30,000,000.00", date: "Jan 15, 2024" },
      //     { year: "2022/2023", amount: "47,215,033.00", date: "Aug 4, 2023" },
      //     { year: "2022/2023", amount: "16,000,000.00", date: "Jun 21, 2023" },
      //     { year: "2022/2023", amount: "18,000,000.00", date: "Jun 15, 2023" },
      //     { year: "2022/2023", amount: "12,000,000.00", date: "Jun 4, 2023" },
      //     { year: "2022/2023", amount: "12,000,000.00", date: "Mar 1, 2023" },
      //     { year: "2022/2023", amount: "5,000,000.00", date: "Feb 15, 2023" },
      //     { year: "2022/2023", amount: "7,000,000.00", date: "Jan 27, 2023" },
      //     { year: "2022/2023", amount: "14,000,000.00", date: "Jan 27, 2023" },
      //     { year: "2022/2023", amount: "7,000,000.00", date: "Dec 24, 2022" },
      //     { year: "2021/2022", amount: "24,088,879.00", date: "May 6, 2022" },
      //     { year: "2021/2022", amount: "18,000,000.00", date: "Apr 7, 2022" },
      //     { year: "2021/2022", amount: "12,000,000.00", date: "Mar 14, 2022" },
      //     { year: "2021/2022", amount: "12,000,000.00", date: "Feb 23, 2022" },
      //     { year: "2021/2022", amount: "5,000,000.00", date: "Feb 14, 2022" },
      //     { year: "2021/2022", amount: "44,000,000.00", date: "Oct 28, 2021" },
      //     { year: "2020/2021", amount: "33,000,000.00", date: "Jul 22, 2021" },
      //     { year: "2020/2021", amount: "12,000,000.00", date: "Jun 16, 2021" },
      //     { year: "2020/2021", amount: "10,000,000.00", date: "May 21, 2021" },
      //     { year: "2020/2021", amount: "6,000,000.00", date: "May 6, 2021" },
      //     { year: "2020/2021", amount: "13,000,000.00", date: "Apr 23, 2021" },
      //     { year: "2020/2021", amount: "7,000,000.00", date: "Mar 22, 2021" },
      //     { year: "2020/2021", amount: "10,000,000.00", date: "Feb 22, 2021" },
      //     { year: "2020/2021", amount: "9,000,000.00", date: "Jan 4, 2021" },
      //     { year: "2020/2021", amount: "13,000,000.00", date: "Mar 16, 2021" },
      //     { year: "2020/2021", amount: "6,900,000.00", date: "Mar 17, 2021" },
      //     { year: "2019/2020", amount: "33,367,724.10", date: "Sep 10, 2020" },
      //     { year: "2019/2020", amount: "21,000,000.00", date: "Aug 26, 2020" },
      //     { year: "2019/2020", amount: "15,000,000.00", date: "Jul 13, 2020" },
      //     { year: "2019/2020", amount: "21,000,000.00", date: "Mar 20, 2020" },
      //     { year: "2019/2020", amount: "5,000,000.00", date: "Dec 19, 2019" },
      //     { year: "2019/2020", amount: "14,000,000.00", date: "Feb 25, 2020" },
      //     { year: "2019/2020", amount: "6,000,000.00", date: "Jan 30, 2020" },
      //     { year: "2019/2020", amount: "18,000,000.00", date: "Nov 19, 2019" },
      //     { year: "2019/2020", amount: "4,000,000.00", date: "Nov 13, 2019" },
      //     { year: "2018/2019", amount: "55,040,875.50", date: "Jun 18, 2019" },
      //     { year: "2018/2019", amount: "13,000,000.00", date: "Apr 30, 2019" },
      //     { year: "2018/2019", amount: "11,000,000.00", date: "Mar 14, 2019" },
      //     { year: "2018/2019", amount: "8,000,000.00", date: "Feb 25, 2019" },
      //     { year: "2018/2019", amount: "12,000,000.00", date: "Feb 19, 2019" },
      //     { year: "2018/2019", amount: "10,000,000.00", date: "Dec 18, 2018" },
      //     { year: "2017/2018", amount: "475,862.00", date: "Jul 31, 2018" },
      //     { year: "2017/2018", amount: "11,379,310.35", date: "Jul 11, 2018" },
      //     { year: "2017/2018", amount: "21,929,310.80", date: "Jun 4, 2018" },
      //     { year: "2017/2018", amount: "21,000,000.00", date: "May 15, 2018" },
      //     { year: "2017/2018", amount: "37,905,172.00", date: "Feb 21, 2018" },
      //     { year: "2017/2018", amount: "5,500,000.00", date: "Jan 29, 2018" },
      //     { year: "2016/2017", amount: "40,948,275.10", date: "Mar 20, 2017" },
      //     { year: "2016/2017", amount: "36,853,449.00", date: "Nov 24, 2016" },
      //     { year: "2016/2017", amount: "4,094,827.60", date: "Oct 4, 2016" },
      //     { year: "2014/2015", amount: "26,348,207.00", date: "Nov 26, 2014" },
      //     { year: "2014/2015", amount: "26,348,207.00", date: "Apr 17, 2015" },
      //     { year: "2013/2014", amount: "36,747,349.50", date: "Jul 30, 2014" },
      //     { year: "2015/2016", amount: "28,667,928.00", date: "Apr 27, 2016" },
      //     { year: "2015/2016", amount: "28,000,000.00", date: "Mar 30, 2016" },
      //     { year: "2015/2016", amount: "25,000,000.00", date: "Dec 14, 2015" },
      //     { year: "2015/2016", amount: "10,000,000.00", date: "Nov 18, 2015" },
      //     { year: "2015/2016", amount: "10,000,000.00", date: "Oct 26, 2015" },
      //     { year: "2015/2016", amount: "10,000,000.00", date: "Oct 26, 2015" },
      //     { year: "2014/2015", amount: "10,000,000.00", date: "Nov 11, 2015" },
      //     { year: "2014/2015", amount: "5,800,000.00", date: "Aug 24, 2015" },
      //     { year: "2014/2015", amount: "5,800,000.00", date: "Aug 21, 2015" },
      //     { year: "2014/2015", amount: "20,548,206.80", date: "Jun 22, 2015" },
      //     { year: "2014/2015", amount: "11,539,283.00", date: "Feb 5, 2015" },
      //     { year: "2014/2015", amount: "14,808,924.20", date: "Dec 23, 2014" },
      //   ],

      //   projects: projects,

      //   proposals: [
      //     {
      //       id: 0,
      //       filename: "2021-2022 Project Proposal",
      //       status: "Approved",
      //       upload_date: "April 17, 2023",
      //       action: () => {
      //         window.location.href = "path/to/2021-2022-Project-Proposal.pdf";
      //       },
      //     },
      //     {
      //       id: 1,
      //       filename: "Laikipia North Financial Year: 2020-2021",
      //       status: "Approved",
      //       upload_date: "September 8, 2021",
      //       action: () => {
      //         window.location.href =
      //           "path/to/Laikipia-North-Financial-Year-2020-2021.pdf";
      //       },
      //     },
      //     {
      //       id: 2,
      //       filename: "Laikipia North Financial Year: 2019-2020",
      //       status: "Approved",
      //       upload_date: "September 8, 2021",
      //       action: () => {
      //         window.location.href =
      //           "path/to/Laikipia-North-Financial-Year-2019-2020.pdf";
      //       },
      //     },
      //     {
      //       id: 3,
      //       filename: "Laikipia North Financial Year: 2018-2019",
      //       status: "Approved",
      //       upload_date: "September 8, 2021",
      //       action: () => {
      //         window.location.href =
      //           "path/to/Laikipia-North-Financial-Year-2018-2019.pdf";
      //       },
      //     },
      //     {
      //       id: 4,
      //       filename: "Laikipia North Financial Year: 2017-2018",
      //       status: "Approved",
      //       upload_date: "September 8, 2021",
      //       action: () => {
      //         window.location.href =
      //           "path/to/Laikipia-North-Financial-Year-2017-2018.pdf";
      //       },
      //     },
      //     {
      //       id: 5,
      //       filename: "Laikipia North Financial Year: 2016-2017",
      //       status: "Approved",
      //       upload_date: "September 8, 2021",
      //       action: () => {
      //         window.location.href =
      //           "path/to/Laikipia-North-Financial-Year-2016-2017.pdf";
      //       },
      //     },
      //     {
      //       id: 6,
      //       filename: "Laikipia North Financial Year: 2015-2016",
      //       status: "Approved",
      //       upload_date: "September 8, 2021",
      //       action: () => {
      //         window.location.href =
      //           "path/to/Laikipia-North-Financial-Year-2015-2016.pdf";
      //       },
      //     },
      //   ],
      // },
      {
        id: 2,
        title: "Laikipia North Office(Nanyuki)",
        link: "constituency-office",
        img:nanyukiOffice,
        description:
          "Our office serves as a resource hub for residents to access services, lodge requests, and engage with their elected representatives on matters that affect their day-to-day lives.",
        projects: projects,
        events: [
          {
            id: 0,
            title: "Community fair",

            img:"https://images.pexels.com/photos/12334810/pexels-photo-12334810.jpeg?auto=compress&cs=tinysrgb&w=600",
            eventOrganiser: "constituency-office",
            link: "community-fair",
            date: "25 August 2024",
            time: "09:00 am - 02:00 pm",
            location: "Dol dol",
            cost: "free",
            phone: "+254 987 654 32",
            email: "health@laikipianorthconstituency.go.ke",
            website: "laikipianorthconstituency.go.ke",
            description: `Join us for a day of health awareness and wellness activities. Free health screenings, consultations,
            and educational workshops will be available. Learn how to maintain a healthy lifestyle and get your
            questions answered by medical professionals.`,
            mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.8534130535026!2d37.81297337489256!3d-1.289413712345123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d1234a2a1b%3A0x0bc0aef22bbf8c!2sHealth%20Center!5e0!3m2!1sen!2ske!4v1716454942347!5m2!1sen!2ske",
          },
          {
            id: 1,
            title: "Community Health Fair",
            link: "community-health-fair",
            img:"https://images.pexels.com/photos/30688589/pexels-photo-30688589/free-photo-of-healthcare-professional-checking-patient-s-blood-pressure.jpeg?auto=compress&cs=tinysrgb&w=1200",
            eventOrganiser: "constituency-office",
            date: "25 August 2024",
            time: "09:00 am - 02:00 pm",
            location: "Segera",
            cost: "free",
            phone: "+254 987 654 32",
            email: "health@laikipianorthconstituency.go.ke",
            website: "laikipianorthconstituency.go.ke",
            description: `Join us for a day of health awareness and wellness activities. Free health screenings, consultations,
                          and educational workshops will be available. Learn how to maintain a healthy lifestyle and get your
                          questions answered by medical professionals.`,
            mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.8534130535026!2d37.81297337489256!3d-1.289413712345123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d1234a2a1b%3A0x0bc0aef22bbf8c!2sHealth%20Center!5e0!3m2!1sen!2ske!4v1716454942347!5m2!1sen!2ske",
          },
          {
            id: 2,
            title: "Education and Career Expo",
            link: "education-and-career-expo",
            img:"https://images.pexels.com/photos/11025024/pexels-photo-11025024.jpeg?auto=compress&cs=tinysrgb&w=1200",
            date: "15 September 2024",
            eventOrganiser: "constituency-office",
            time: "10:00 am - 05:00 pm",
            location: "Segera",
            cost: "free",
            phone: "+254 567 890 12",
            email: "education@laikipianorthconstituency.go.ke",
            website: "laikipianorthconstituency.go.ke",
            description: `Explore a variety of educational and career opportunities at our annual expo. Meet representatives
              from top universities and companies, attend workshops, and gain valuable insights to help you
              plan your future.`,
              mapEmbedUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.8311311045672!2d37.82598527489255!3d-1.291231712345126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d1234a2a1b%3A0x123a8f22bbf8c!2sEducation%20Center!5e0!3m2!1sen!2ske!4v1716454942348!5m2!1sen!2ske",
            },
            {
              id: 3,
              title: "Environmental Conservation Workshop",
              link: "environmental-conservation-workshop",
              img:"https://images.pexels.com/photos/12334810/pexels-photo-12334810.jpeg?auto=compress&cs=tinysrgb&w=600",
            eventOrganiser: "constituency-office",
            date: "30 November 2024",
            time: "11:00 am - 03:00 pm",
            location: "Nairobi",
            cost: "open to all",
            phone: "+254 321 654 98",
            email: "environment@laikipianorthconstituency.go.ke",
            website: "laikipianorthconstituency.go.ke",
            description: `Participate in our hands-on workshop on environmental conservation. Learn about sustainable practices,
              how to reduce your carbon footprint, and what you can do to help protect our planet. Everyone is
              welcome.`,
            mapEmbedUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.8543140535026!2d37.81997337489256!3d-1.292413712345125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d1234a2a1b%3A0x1bc0aef22bbf8c!2sEnvironmental%20Center!5e0!3m2!1sen!2ske!4v1716454942349!5m2!1sen!2ske",
          },
        ],

        members: [
          {
            name: "Charles Kimotho Ndungu",
            designation: "Male Youth Representative",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Naundoi Lomoni Rukinyi",
            designation: "Male Adult Representative",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Julia Nyambura Wachira",
            designation: "Female Youth Representative",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Maria Adeket Iyanai",
            designation: "Female Adult Representative",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Dickson Makin Leshepa",
            designation: "Representative of Persons Living with Disability",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Daniel Kimalel Matunge",
            designation: "Nominee of the Constituency Office (Male)",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Julia Cheporwas Lochingamoi",
            designation: "Nominee of the Constituency Office (Female)",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
        ],
      },
      {
        id: 3,
        title: "Parliament Office(Bunge)",
        link: "parliament-office",
        img:bungeTowers,
        description:
          "Our office serves as a resource hub for residents to access services, lodge requests, and engage with their elected representatives on matters that affect their day-to-day lives.",
        projects: projects,
        events: [
          {
            id: 0,
            title: "Community fair",
            eventOrganiser: "constituency-office",
            link: "community-fair",
            date: "25 August 2024",
            img:"https://images.pexels.com/photos/12334810/pexels-photo-12334810.jpeg?auto=compress&cs=tinysrgb&w=600",
            time: "09:00 am - 02:00 pm",
            location: "Dol dol",
            cost: "free",
            phone: "+254 987 654 32",
            email: "health@laikipianorthconstituency.go.ke",
            website: "laikipianorthconstituency.go.ke",
            description: `Join us for a day of health awareness and wellness activities. Free health screenings, consultations,
              and educational workshops will be available. Learn how to maintain a healthy lifestyle and get your
              questions answered by medical professionals.`,
            mapEmbedUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.8534130535026!2d37.81297337489256!3d-1.289413712345123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d1234a2a1b%3A0x0bc0aef22bbf8c!2sHealth%20Center!5e0!3m2!1sen!2ske!4v1716454942347!5m2!1sen!2ske",
          },
          {
            id: 1,
            title: "Community Health Fair",
            link: "community-health-fair",
            eventOrganiser: "constituency-office",
            img:"https://images.pexels.com/photos/12334810/pexels-photo-12334810.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: "25 August 2024",
            time: "09:00 am - 02:00 pm",
            location: "Segera",
            cost: "free",
            phone: "+254 987 654 32",
            email: "health@laikipianorthconstituency.go.ke",
            website: "laikipianorthconstituency.go.ke",
            description: `Join us for a day of health awareness and wellness activities. Free health screenings, consultations,
                          and educational workshops will be available. Learn how to maintain a healthy lifestyle and get your
                          questions answered by medical professionals.`,
            mapEmbedUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.8534130535026!2d37.81297337489256!3d-1.289413712345123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d1234a2a1b%3A0x0bc0aef22bbf8c!2sHealth%20Center!5e0!3m2!1sen!2ske!4v1716454942347!5m2!1sen!2ske",
          },
          {
            id: 2,
            title: "Education and Career Expo",
            link: "education-and-career-expo",
            img:"https://images.pexels.com/photos/12334810/pexels-photo-12334810.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: "15 September 2024",
            eventOrganiser: "constituency-office",
            time: "10:00 am - 05:00 pm",
            location: "Segera",
            cost: "free",
            phone: "+254 567 890 12",
            email: "education@laikipianorthconstituency.go.ke",
            website: "laikipianorthconstituency.go.ke",
            description: `Explore a variety of educational and career opportunities at our annual expo. Meet representatives
              from top universities and companies, attend workshops, and gain valuable insights to help you
              plan your future.`,
            mapEmbedUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.8311311045672!2d37.82598527489255!3d-1.291231712345126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d1234a2a1b%3A0x123a8f22bbf8c!2sEducation%20Center!5e0!3m2!1sen!2ske!4v1716454942348!5m2!1sen!2ske",
          },
          {
            id: 3,
            title: "Environmental Conservation Workshop",
            link: "environmental-conservation-workshop",
            eventOrganiser: "constituency-office",
            img:"https://images.pexels.com/photos/12334810/pexels-photo-12334810.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: "30 November 2024",
            time: "11:00 am - 03:00 pm",
            location: "Nairobi",
            cost: "open to all",
            phone: "+254 321 654 98",
            email: "environment@laikipianorthconstituency.go.ke",
            website: "laikipianorthconstituency.go.ke",
            description: `Participate in our hands-on workshop on environmental conservation. Learn about sustainable practices,
              how to reduce your carbon footprint, and what you can do to help protect our planet. Everyone is
              welcome.`,
            mapEmbedUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.8543140535026!2d37.81997337489256!3d-1.292413712345125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d1234a2a1b%3A0x1bc0aef22bbf8c!2sEnvironmental%20Center!5e0!3m2!1sen!2ske!4v1716454942349!5m2!1sen!2ske",
          },
        ],

        members: [
          {
            name: "Charles Kimotho Ndungu",
            designation: "Male Youth Representative",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Naundoi Lomoni Rukinyi",
            designation: "Male Adult Representative",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Julia Nyambura Wachira",
            designation: "Female Youth Representative",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Maria Adeket Iyanai",
            designation: "Female Adult Representative",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Dickson Makin Leshepa",
            designation: "Representative of Persons Living with Disability",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Daniel Kimalel Matunge",
            designation: "Nominee of the Constituency Office (Male)",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
          {
            name: "Julia Cheporwas Lochingamoi",
            designation: "Nominee of the Constituency Office (Female)",
            profile: CDFLOGO,
            socialIcons: [faFacebook, faLinkedin, faX],
          },
        ],
      },
    ],
  },
];
