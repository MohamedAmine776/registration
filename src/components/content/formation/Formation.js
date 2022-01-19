import React, { Fragment, Suspense } from "react";
import {Route, Routes} from "react-router-dom";
import formationRoute from "../../../routes/formation.route";



const loading = (
    <Fragment>
        <div className="flex justify-center items-center">
            <div
                className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0"
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </Fragment>
)

export default function Formation() {
  return (
    <Suspense fallback={loading}>
      <Routes>
        {formationRoute.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.component />}
              />
            )
          );
        })}
      </Routes>
    </Suspense>
  );
}
