let table = document.querySelector('.table-responsive')

let cardio = document.getElementById('cardio');
let powerlifting = document.getElementById('powerlifting');
let crossfit = document.getElementById('crossfit')
let allclasses = document.getElementById('allclasses')


cardio.addEventListener('click', function(){
cardio.classList.add('td-active');
powerlifting.classList.remove('td-active');
crossfit.classList.remove('td-active');
allclasses.classList.remove('td-active')

    table.innerHTML = `
    

    <table class="table-bordered">
        <thead class="bg-secondary text-white text-center">
            <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
            </tr>
        </thead>
        <tbody class="text-center">
            <tr>
                <th class="bg-secondary">6.00am - 8.00am</th>
                <td class='td-active'>
                    <h5>Cardio</h5>John Deo
                </td>
                <td></td>
                <td>
                    <h5>Crossfit</h5>Adam Phillips
                </td>
                <td></td>
                <td>
                    <h5>Power Lifting</h5>Murad Balayev
                </td>
                <td></td>
                <td class='td-active'>
                    <h5>Cardio</h5>John Deo
                </td>
            </tr>
            <tr>
                <th class="bg-secondary">10.00am - 12.00am</th>
                <td></td>
                <td>
                    <h5>Power Lifting</h5>James Alien
                </td>
                <td></td>
                <td class='td-active'>
                    <h5>Cardio</h5>John Deo
                </td>
                <td></td>
                <td>
                    <h5>Crossfit</h5>Adam Phillips
                </td>
                <td></td>
            </tr>
            <tr>
                <th class="bg-secondary ">5.00pm - 7.00pm</th>
                <td>
                    <h5>Crossfit</h5>Adam Phillips
                </td>
                <td></td>
                <td>
                    <h5>Power Lifting</h5>Murad Balayev
                </td>
                <td></td>
                <td class='td-active'>
                    <h5>Cardio</h5>John Deo
                </td>
                <td></td>
                <td>
                    <h5>Crossfit</h5>Adam Phillips
                </td>
            </tr>
            <tr>
                <th class="bg-secondary ">7.00pm - 9.00pm</th>
                <td></td>
                <td class='td-active'>
                    <h5>Cardio</h5>John Deo
                </td>
                <td></td>
                <td>
                    <h5>Crossfit</h5>Adam Phillips
                </td>
                <td></td>
                <td>
                    <h5>Power Lifting</h5>Murad Balayev
                </td>
                <td></td>
            </tr>
        </tbody>
    </table>
    `
})

powerlifting.addEventListener('click', function(){
    powerlifting.classList.add('td-active');
    cardio.classList.remove('td-active');
    crossfit.classList.remove('td-active');
    allclasses.classList.remove('td-active');
    table.innerHTML = `
    <table class="table-bordered">
        <thead class="bg-secondary text-white text-center">
            <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
            </tr>
        </thead>
        <tbody class="text-center">
            <tr>
                <th class="bg-secondary">6.00am - 8.00am</th>
                <td>
                    <h5>Cardio</h5>John Deo
                </td>
                <td></td>
                <td>
                    <h5>Crossfit</h5>Adam Phillips
                </td>
                <td></td>
                <td class='td-active'>
                    <h5>Power Lifting</h5>Murad Balayev
                </td>
                <td></td>
                <td>
                    <h5>Cardio</h5>John Deo
                </td>
            </tr>
            <tr>
                <th class="bg-secondary">10.00am - 12.00am</th>
                <td></td>
                <td class='td-active'>
                    <h5>Power Lifting</h5>James Alien
                </td>
                <td></td>
                <td >
                    <h5>Cardio</h5>John Deo
                </td>
                <td></td>
                <td>
                    <h5>Crossfit</h5>Adam Phillips
                </td>
                <td></td>
            </tr>
            <tr>
                <th class="bg-secondary ">5.00pm - 7.00pm</th>
                <td>
                    <h5>Crossfit</h5>Adam Phillips
                </td>
                <td></td>
                <td class='td-active'>
                    <h5>Power Lifting</h5>Murad Balayev
                </td>
                <td></td>
                <td>
                    <h5>Cardio</h5>John Deo
                </td>
                <td></td>
                <td>
                    <h5>Crossfit</h5>Adam Phillips
                </td>
            </tr>
            <tr>
                <th class="bg-secondary ">7.00pm - 9.00pm</th>
                <td></td>
                <td >
                    <h5>Cardio</h5>John Deo
                </td>
                <td></td>
                <td>
                    <h5>Crossfit</h5>Adam Phillips
                </td>
                <td></td>
                <td class='td-active'>
                    <h5>Power Lifting</h5>Murad Balayev
                </td>
                <td></td>
            </tr>
        </tbody>
    </table>
    `
})

crossfit.addEventListener('click', function(){
    crossfit.classList.add('td-active');
    cardio.classList.remove('td-active');
    powerlifting.classList.remove('td-active');
    allclasses.classList.remove('td-active');
  
    table.innerHTML = `
    <table class="table-bordered">
    <thead class="bg-secondary text-white text-center">
        <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
        </tr>
    </thead>
    <tbody class="text-center">
        <tr>
            <th class="bg-secondary">6.00am - 8.00am</th>
            <td>
                <h5>Cardio</h5>John Deo
            </td>
            <td></td>
            <td class='td-active'>
                <h5>Crossfit</h5>Adam Phillips
            </td>
            <td></td>
            <td>
                <h5>Power Lifting</h5>Murad Balayev
            </td>
            <td></td>
            <td>
                <h5>Cardio</h5>John Deo
            </td>
        </tr>
        <tr>
            <th class="bg-secondary">10.00am - 12.00am</th>
            <td></td>
            <td>
                <h5>Power Lifting</h5>James Alien
            </td>
            <td></td>
            <td >
                <h5>Cardio</h5>John Deo
            </td>
            <td></td>
            <td class='td-active'>
                <h5>Crossfit</h5>Adam Phillips
            </td>
            <td></td>
        </tr>
        <tr>
            <th class="bg-secondary ">5.00pm - 7.00pm</th>
            <td class='td-active'>
                <h5>Crossfit</h5>Adam Phillips
            </td>
            <td></td>
            <td>
                <h5>Power Lifting</h5>Murad Balayev
            </td>
            <td></td>
            <td>
                <h5>Cardio</h5>John Deo
            </td>
            <td></td>
            <td  class='td-active'>
                <h5>Crossfit</h5>Adam Phillips
            </td>
        </tr>
        <tr>
            <th class="bg-secondary ">7.00pm - 9.00pm</th>
            <td></td>
            <td >
                <h5>Cardio</h5>John Deo
            </td>
            <td></td>
            <td  class='td-active'>
                <h5>Crossfit</h5>Adam Phillips
            </td>
            <td></td>
            <td>
                <h5>Power Lifting</h5>Murad Balayev
            </td>
            <td></td>
        </tr>
    </tbody>
</table>
    `
})

allclasses.addEventListener('click', function(){
    allclasses.classList.add('td-active');
    cardio.classList.remove('td-active');
    crossfit.classList.remove('td-active');
    powerlifting.classList.remove('td-active');
    table.innerHTML = `
   

    <table class="table-bordered">
        <thead class="bg-secondary text-white text-center">
            <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
            </tr>
        </thead>
        <tbody class="text-center">
            <tr>
                <th class="bg-secondary">6.00am - 8.00am</th>
                <td>
                    <h5>Cardio</h5>John Deo
                </td>
                <td></td>
                <td>
                    <h5>Crossfit</h5>Adam Phillips
                </td>
                <td></td>
                <td >
                    <h5>Power Lifting</h5>Murad Balayev
                </td>
                <td></td>
                <td>
                    <h5>Cardio</h5>John Deo
                </td>
            </tr>
            <tr>
                <th class="bg-secondary">10.00am - 12.00am</th>
                <td></td>
                <td >
                    <h5>Power Lifting</h5>James Alien
                </td>
                <td></td>
                <td >
                    <h5>Cardio</h5>John Deo
                </td>
                <td></td>
                <td>
                    <h5>Crossfit</h5>Adam Phillips
                </td>
                <td></td>
            </tr>
            <tr>
                <th class="bg-secondary ">5.00pm - 7.00pm</th>
                <td>
                    <h5>Crossfit</h5>Adam Phillips
                </td>
                <td></td>
                <td >
                    <h5>Power Lifting</h5>Murad Balayev
                </td>
                <td></td>
                <td>
                    <h5>Cardio</h5>John Deo
                </td>
                <td></td>
                <td>
                    <h5>Crossfit</h5>Adam Phillips
                </td>
            </tr>
            <tr>
                <th class="bg-secondary ">7.00pm - 9.00pm</th>
                <td></td>
                <td >
                    <h5>Cardio</h5>John Deo
                </td>
                <td></td>
                <td>
                    <h5>Crossfit</h5>Adam Phillips
                </td>
                <td></td>
                <td>
                    <h5>Power Lifting</h5>Murad Balayev
                </td>
                <td></td>
            </tr>
        </tbody>
    </table>
    `
})