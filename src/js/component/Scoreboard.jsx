import React from "react";

export const Scoreboard = ({ won, lost, ties }) =>
  <section className="container ">
    <article className='card'>
      <h3 className='my-3'>Score board:</h3>
      <div className='d-flex justify-content-around my-3'>
        <h3 className='border border-success bg-success p-3'>Won: {won}</h3>
        <h3 className='border border-danger bg-danger p-3'>Lost: {lost}</h3>
        <h3 className='border border-warning bg-warning p-3'>Ties: {ties}</h3>
      </div>
    </article>
  </section>
