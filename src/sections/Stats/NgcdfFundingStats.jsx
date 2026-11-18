import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faChartLine,
  faPiggyBank,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

/**
 * NG-CDF Fund Snapshot — stats cards for /services/NGCDF
 *
 * Source figures: NG-CDF financial summary (Laikipia North Constituency).
 * All amounts in Kenyan Shillings (KES); beneficiary figures are head counts.
 *
 * The financial summary carries 12 line items, but five are redundant on a
 * public page: Total Allocation, Approved Allocation and Total Budget share
 * the same value, and Opening Balances / both Reallocation lines are zero.
 * Only the four headline figures get cards; the remaining details (PMC
 * expenditure and balance, PWD beneficiaries) sit as a footnote under the
 * utilization bar instead of as extra cards.
 *
 * Drop-in usage (inside ServiceDetailsContainer):
 *   {isNgcdfRoute && <NgcdfFundingStats />}
 * Styles live in serviceDetail.css (classes prefixed `ngcdf`).
 */

const NGCDF_STATS = [
  { label: "Total Budget in FY", value: 183266670, type: "currency", icon: faWallet, featured: true },
  { label: "NGCDF Expenditures in FY", value: 161428276, type: "currency", icon: faChartLine, featured: true },
  { label: "NGCDF Balances in FY", value: 21838394, type: "currency", icon: faPiggyBank },
  { label: "Total Beneficiaries in FY", value: 15462, type: "count", icon: faUsers },
];

// Secondary figures from the same financial summary — rendered under the
// utilization bar rather than as cards, to keep the grid uncluttered.
const SECONDARY_FIGURES = {
  pmcExpenditures: 69067800,
  pmcBalances: 16318750,
  pwdBeneficiaries: 151,
};

const formatValue = (value, type) =>
  type === "currency"
    ? value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : value.toLocaleString("en-US");

const NgcdfFundingStats = ({ stats = NGCDF_STATS, secondary = SECONDARY_FIGURES }) => {
  const pick = (label) => stats.find((s) => s.label === label)?.value ?? 0;

  const totalBudget = pick("Total Budget in FY");
  const expenditures = pick("NGCDF Expenditures in FY");
  const beneficiaries = pick("Total Beneficiaries in FY");

  const utilization = totalBudget ? Number(((expenditures / totalBudget) * 100).toFixed(1)) : 0;
  const pwdShare =
    beneficiaries > 0
      ? Number(((secondary.pwdBeneficiaries / beneficiaries) * 100).toFixed(1))
      : 0;

  return (
    <div className="ngcdfStatsSection">
      <div className="ngcdfStatsHeader">
        <h4>NG-CDF Fund Snapshot</h4>
        <p>
          The constituency fund's financial year at a glance — allocation,
          spending and reach. All amounts are in Kenyan Shillings (KES).
        </p>
      </div>

      <div className="ngcdfStatsGrid">
        {stats.map((stat) => (
          <div
            className={`ngcdfStatCard${stat.featured ? " ngcdfStatCardFeatured" : ""}`}
            key={stat.label}
          >
            <div className="ngcdfStatIcon">
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <span className="ngcdfStatLabel">{stat.label}</span>
            <span className="ngcdfStatValue">
              {formatValue(stat.value, stat.type)}
              <span className="ngcdfStatUnit">
                {stat.type === "currency" ? "KES" : "persons"}
              </span>
            </span>
          </div>
        ))}
      </div>

      <div className="ngcdfUtilization">
        <div className="ngcdfUtilizationHeader">
          <h5>Funds Utilized to Date</h5>
          <span className="ngcdfUtilizationPercent">{utilization}%</span>
        </div>
        <div
          className="ngcdfUtilizationBar"
          role="progressbar"
          aria-valuenow={utilization}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Share of the total FY budget disbursed"
        >
          <div className="ngcdfUtilizationFill" style={{ width: `${utilization}%` }} />
        </div>
        <div className="ngcdfUtilizationMeta">
          {beneficiaries > 0 && (
            <span>
              Includes <strong>{formatValue(secondary.pwdBeneficiaries, "count")}</strong>{" "}
              persons with disabilities ({pwdShare}% of all beneficiaries)
            </span>
          )}
          <span>
            Project Management Committee (PMC) projects:{" "}
            <strong>KES {formatValue(secondary.pmcExpenditures, "currency")}</strong> spent ·{" "}
            <strong>KES {formatValue(secondary.pmcBalances, "currency")}</strong> balance
          </span>
        </div>
      </div>
    </div>
  );
};

export default NgcdfFundingStats;