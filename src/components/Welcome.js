import React from 'react'

const Welcome = ({ gameDuration, onStart }) => {
    return (
        <div className="popup-background flex justify-center items-center p-6">
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="">
                        <div class="mt-3 text-center sm:mt-0">
                            <h3 class="text-xl leading-6 font-medium text-gray-900">
                                Glypoon
                            </h3>
                            <div class="mt-3">
                                <p class="text-gray-600">
                                    Create as many words as you can in {gameDuration} minutes!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3">
                    <button className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-0 sm:text-sm"
                        onClick={onStart}>
                        Play
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Welcome
