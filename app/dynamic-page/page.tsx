
'use client';

export const runtime = 'edge';

export default function Page() {
	return (
		<div>
			<p className='font-pretendard text-lg leading-relaxed'>
				here <strong>Test</strong> page
				<br />
			</p>
			<p className='leading-relaxed'>This text should be in SUIT</p>
			<p className='font-pretendard leading-relaxed'>
				This text should be in Pretendard
			</p>
		</div>
	);
}
