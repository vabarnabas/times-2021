import React from 'react';

const Form = () => {

    return (
        <div className="">
            <p className="text-secondary pt-20 text-2xl font-bold text-center mb-10 sm:text-4xl">Csapat Értékelése</p>
            <form action="" className="px-4 max-w-2xl w-3/4 mx-auto flex flex-col justify-center items-center bg-white shadow mt-4 py-8 rounded text-secondary">
              <div className="flex justify-center items-center text-center flex-col sm:flex-row">
                <p className="pr-4">Csapat kiválasztása<span className="text-red-600">*</span></p>
                <select className=" px-2 w-full border border-formBorder sm:w-auto focus:outline-none focus:ring-2 focus:ring-estiemGreen focus:border-opacity-0">
                  <option value="Team1">Team1</option>
                  <option value="Team2">Team2</option>
                  <option value="Team3">Team3</option>
                  <option value="Team4">Team4</option>
                </select>
              </div>
            </form>
        </div>
    );
}

export default Form;