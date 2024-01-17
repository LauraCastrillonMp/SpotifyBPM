import React from 'react'
import Landing from '../containers/Landing'
import FindBPM from '../containers/FindBPM'
import ChooseSongs from '../containers/ChooseSongs'
import PlaylistAdded from '../containers/PlaylistAdded'

export default function Screen1() {
  return (
    <>
      <h3>Screen 1</h3>
      <Landing />
      <h3>Screen 2</h3>
      <FindBPM />
      <h3>Screen 3</h3>
      <ChooseSongs />
      <h3>Screen 4</h3>
      <PlaylistAdded />
    </>
  )
}
