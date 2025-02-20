'use client'

// support - bestream-fronted - Visual Studio Code
// user class
import { useTranslations } from 'next-intl'

import { useCurrent } from '@/hooks/useCurrent'

// support - bestream-fronted - Visual Studio Code
// user class

// support - bestream-fronted - Visual Studio Code
// user class

// support - bestream-fronted - Visual Studio Code
// user class

// support - bestream-fronted - Visual Studio Code
// user class

// support - bestream-fronted - Visual Studio Code
// user class

// support - bestream-fronted - Visual Studio Code
// user class

// support - bestream-fronted - Visual Studio Code
// user class

// support - bestream-fronted - Visual Studio Code
// user class

// support - bestream-fronted - Visual Studio Code
// user class

// support - bestream-fronted - Visual Studio Code
// user class

export default function Home() {
	console.log('Home component rendered ') // <-- Если это не появится в консоли, компонент не загружается

	const { user, isLoadingProfile } = useCurrent()
	console.log(user, isLoadingProfile)
	return (
		<div>
			{/* {isLoadingProfile ? 'loading' : JSON.stringify(user)} */}kkk
		</div>
	)
}
