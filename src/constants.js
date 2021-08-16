exports.OS_PICKER = {
  ANDROID: 'View Android emulators (kernel)',
  ANDROID_COLD: 'View Android cold boot emulators (kernel)',
  IOS: 'View iOS simulators (kernel)'
}

exports.ANDROID_COMMANDS = {
  LIST_AVDS: ' -list-avds',
  RUN_AVD: ' -dns-server 8.8.8.8 -avd ',
  RUN_AVD_COLD: ' -dns-server -no-snapshot-load -avd '
}

exports.IOS_COMMANDS = {
  LIST_SIMULATORS: 'instruments -s devices',
  RUN_SIMULATOR: 'instruments -w '
}

exports.ANDROID = {
  PATH: 'emulator'
}
